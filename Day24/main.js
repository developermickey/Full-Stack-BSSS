// State
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentFilter = "all";
let editingId = null;

// DOM Elements
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
const filterBtns = document.querySelectorAll(".filter-btn");
const totalCount = document.getElementById("totalCount");
const activeCount = document.getElementById("activeCount");
const completedCount = document.getElementById("completedCount");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderNotes();
  updateStats();

  // Event Listeners
  addBtn.addEventListener("click", addNote);
  noteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addNote();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderNotes();
    });
  });
});

// Functions
function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  const note = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  notes.unshift(note);
  saveNotes();
  noteInput.value = "";
  renderNotes();
  updateStats();
}

function toggleComplete(id) {
  const note = notes.find((n) => n.id === id);
  if (note) {
    note.completed = !note.completed;
    saveNotes();
    renderNotes();
    updateStats();
  }
}

function startEdit(id) {
  editingId = id;
  renderNotes();
}

function saveEdit(id) {
  const editInput = document.querySelector(
    `.note-item[data-id="${id}"] .edit-input`,
  );
  const newText = editInput.value.trim();

  if (newText) {
    const note = notes.find((n) => n.id === id);
    if (note) {
      note.text = newText;
      saveNotes();
    }
  }

  editingId = null;
  renderNotes();
  updateStats();
}

function cancelEdit() {
  editingId = null;
  renderNotes();
}

function deleteNote(id) {
  if (confirm("Are you sure you want to delete this note?")) {
    notes = notes.filter((n) => n.id !== id);
    saveNotes();
    renderNotes();
    updateStats();
  }
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getFilteredNotes() {
  switch (currentFilter) {
    case "active":
      return notes.filter((n) => !n.completed);
    case "completed":
      return notes.filter((n) => n.completed);
    default:
      return notes;
  }
}

function renderNotes() {
  const filteredNotes = getFilteredNotes();

  if (filteredNotes.length === 0) {
    let message = "No notes yet. Add one above!";
    if (currentFilter === "active") message = "No active notes.";
    if (currentFilter === "completed") message = "No completed notes.";

    notesList.innerHTML = `<div class="empty-state"><p>${message}</p></div>`;
    return;
  }

  notesList.innerHTML = filteredNotes
    .map((note) => {
      const isEditing = editingId === note.id;

      if (isEditing) {
        return `
                <div class="note-item" data-id="${note.id}">
                    <input type="checkbox" class="note-checkbox" ${note.completed ? "checked" : ""} onchange="toggleComplete(${note.id})">
                    <input type="text" class="note-text edit-input" value="${escapeHtml(note.text)}" onkeypress="if(event.key==='Enter') saveEdit(${note.id})">
                    <div class="note-actions">
                        <button class="save-btn" onclick="saveEdit(${note.id})">Save</button>
                        <button class="cancel-btn" onclick="cancelEdit()">Cancel</button>
                    </div>
                </div>
            `;
      }

      return `
            <div class="note-item ${note.completed ? "completed" : ""}" data-id="${note.id}">
                <input type="checkbox" class="note-checkbox" ${note.completed ? "checked" : ""} onchange="toggleComplete(${note.id})">
                <span class="note-text">${escapeHtml(note.text)}</span>
                <div class="note-actions">
                    <button class="edit-btn" onclick="startEdit(${note.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
                </div>
            </div>
        `;
    })
    .join("");
}

function updateStats() {
  const total = notes.length;
  const completed = notes.filter((n) => n.completed).length;
  const active = total - completed;

  totalCount.textContent = `Total: ${total}`;
  activeCount.textContent = `Active: ${active}`;
  completedCount.textContent = `Completed: ${completed}`;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Make functions globally accessible for inline event handlers
window.toggleComplete = toggleComplete;
window.startEdit = startEdit;
window.saveEdit = saveEdit;
window.cancelEdit = cancelEdit;
window.deleteNote = deleteNote;
