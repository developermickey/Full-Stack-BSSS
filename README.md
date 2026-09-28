# Full Stack Web Development Course - HTML/CSS Basics (Days 2-6)

A structured learning repository covering HTML and CSS fundamentals from a beginner web development course.

## 📁 Project Structure

```
Full Stack BSSS/
├── Day2/                    # HTML Basics - Day 2
│   ├── Day2-HTML-Basics.md  # Complete course notes
│   ├── index.html           # Practice: Personal profile page
│   ├── about-us.html        # Practice: About page
│   └── main.js              # Empty JS file
│
├── Day3/                    # HTML Basics - Day 3
│   ├── Day3-HTML-Basics.md  # Course notes (same as Day 2)
│   ├── index.html           # Practice: Shop by category demo
│   └── classTask/
│       └── index.html       # Assignment: Mukesh Pathak profile page
│
├── Day4/                    # HTML Basics - Day 4
│   ├── Day4-HTML-Basics.md  # Course notes (same as Day 2)
│   ├── beginner-html-tasks.md  # 5 practice tasks
│   ├── Untitled-1.md        # Task 3 notes (video/audio)
│   ├── index.html           # Practice: Basic HTML demo
│   ├── Task-1/              # Task folder
│   ├── 1.mp3                # Audio file for practice
│   └── 1.mp4                # Video file for practice
│
├── Day5/                    # HTML Forms & Tables - Day 5
│   ├── Day5-HTML-Basics.md  # Course notes (same as Day 2)
│   ├── index.html           # Practice: Student table with rowspan
│   ├── table.html           # Practice: Order list table
│   ├── form.html            # Practice: Complete form demo
│   └── Rsion.html           # Additional practice file
│
├── Day6/                    # HTML Forms Review + CSS Intro - Day 6
│   ├── html-notes.md        # Tables, Forms, Input types reference
│   ├── index.html           # Practice: Radio buttons, checkboxes, file input
│   ├── Rev.html             # Review: All HTML basics + video/audio
│   ├── css.html             # CSS basics: selectors, inline/internal styles
│   ├── style.css            # External CSS file
│   ├── img/                 # Images folder
│   ├── 1.mp3                # Audio file
│   └── 1.mp4                # Video file
│
└── .git/                    # Git repository
```

---

## 📚 Day-by-Day Summary

### Day 2: HTML Fundamentals
**Core Topics:**
- HTML5 document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Essential meta tags (charset, viewport, title, description)
- Headings (h1-h6), paragraphs, text formatting
- Lists: unordered (`<ul>`), ordered (`<ol>`), description (`<dl>`)
- Links (`<a>`) - external, internal, email, phone
- Images (`<img>`, `<figure>`, `<figcaption>`) with alt attributes
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- VS Code setup & Live Server
- HTML validation (W3C Validator)
- Best practices & common mistakes

**Homework:** Personal profile page + Recipe page

---

### Day 3: HTML Practice & Reinforcement
**Focus:** Applying Day 2 concepts
- Class task: Complete profile page with header, hero, about, skills, contact sections
- Practice page demonstrating all HTML elements

---

### Day 4: HTML Media & Semantic Practice
**Core Topics:**
- Video (`<video>`) and Audio (`<audio>`) tags with controls
- 5 Beginner Practice Tasks:
  1. Personal Profile
  2. Simple Blog Article
  3. My Media Page (video + audio)
  4. Restaurant Menu
  5. News Article Page
- Challenge: HTML only (no CSS/JS)

---

### Day 5: HTML Tables & Forms
**Tables:**
- Table structure: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- Rows (`<tr>`), headers (`<th>`), data (`<td>`)
- Attributes: `colspan`, `rowspan`, `border`

**Forms:**
- `<form>` with `action`, `method` (GET/POST), `enctype`
- `<label>` with `for` attribute
- Input types: text, email, password, date, datetime-local, color, file
- Select dropdown (`<select>`, `<option>`)
- Checkboxes & Radio buttons
- Buttons: submit, reset, button
- Common attributes: name, id, value, placeholder, required, disabled, readonly

---

### Day 6: Form Elements Review + CSS Introduction
**HTML Review:**
- All heading levels, paragraph formatting
- Bold/Italic/Strong/Em/Mark tags
- Lists (ul, ol, dl)
- Links (target _blank/_self)
- Images, Video, Audio
- `<pre>` tag for preformatted text

**Form Elements:**
- File upload (`<input type="file">`)
- Checkboxes (multiple selection)
- Radio buttons (single selection, same `name`)

**CSS Basics:**
- Three ways to add CSS: Inline, Internal (`<style>`), External (`<link>`)
- Selectors: Tag, Class (`.`), ID (`#`)
- Properties: `background-color`, `color`
- Box model introduction

---

## 🛠️ Required Tools

| Tool | Purpose | Link |
|------|---------|------|
| **VS Code** | Code editor | https://code.visualstudio.com/ |
| **Live Server** | VS Code extension for live preview | Extension marketplace |
| **Chrome/Firefox** | Browser with DevTools | - |
| **W3C Validator** | HTML validation | https://validator.w3.org/ |
| **Git** | Version control (optional) | https://git-scm.com/ |

**Recommended VS Code Extensions:**
- HTML CSS Support
- Live Server
- Prettier - Code formatter
- Auto Rename Tag

---

## 🚀 Getting Started

1. **Clone/Open** this repository in VS Code
2. **Install** Live Server extension
3. **Navigate** to any day folder (e.g., `Day2/`)
4. **Right-click** `index.html` → "Open with Live Server"
5. **Edit** files and see changes in real-time

---

## 📖 Key Learning Resources

### Documentation
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML5 Specification](https://html.spec.whatwg.org/)

### Practice Platforms
- [CodePen](https://codepen.io/) - Online editor
- [freeCodeCamp](https://www.freecodecamp.org/) - Interactive lessons
- [Frontend Mentor](https://www.frontendmentor.io/) - Real projects

### Cheat Sheets
- [HTML5 Tag Reference](https://htmlcheatsheet.com/)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [CSS Reference](https://cssreference.io/)

---

## ✅ Validation Checklist

Before submitting any HTML work:
- [ ] Proper `<!DOCTYPE html>` declaration
- [ ] `<html lang="en">` with language attribute
- [ ] `<head>` with charset, viewport, title, description
- [ ] All tags properly opened and closed
- [ ] Proper nesting (close in reverse order)
- [ ] All images have descriptive `alt` attributes
- [ ] Only ONE `<h1>` per page
- [ ] Semantic HTML elements used appropriately
- [ ] Forms have proper `action`, `method`, labels linked to inputs
- [ ] Video/Audio have `controls` attribute
- [ ] Passes [W3C Validator](https://validator.w3.org/)

---

## 📝 Common HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description for SEO">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Site Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Section Title</h2>
            <p>Content goes here...</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## 🎯 Next Steps After Day 6

1. **CSS Deep Dive** - Box model, Flexbox, Grid, animations
2. **JavaScript Basics** - Variables, functions, DOM manipulation
3. **Responsive Design** - Media queries, mobile-first approach
4. **Git & GitHub** - Version control, collaboration
5. **Build Projects** - Portfolio, todo app, weather app, etc.

---

## 📄 License

This is a personal learning repository for educational purposes.

---

**Happy Coding! 🚀**  
*Remember: Practice makes perfect. Build something every day!*