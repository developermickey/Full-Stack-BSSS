# Day 2: HTML Basics - Beginner Course

## Course Overview
**Day 2** focuses on fundamental HTML concepts, structure, and essential tags. Students will learn to create their first webpage with proper HTML5 structure.

---

## Learning Objectives
By the end of Day 2, students will be able to:
- Understand HTML5 document structure
- Use common HTML tags (headings, paragraphs, lists, links, images)
- Create semantic HTML elements
- Validate HTML code

---

## Required Software Installation

### 1. Visual Studio Code (Recommended)
**Download:** https://code.visualstudio.com/
- **Windows:** Run installer, check "Add to PATH"
- **macOS:** Drag to Applications folder
- **Linux:** `sudo snap install code --classic` or download .deb/.rpm

**Essential Extensions to Install:**
- HTML CSS Support
- Live Server (for live preview)
- Prettier - Code formatter
- Auto Rename Tag

### 2. Web Browser (for testing)
- Google Chrome (recommended - DevTools)
- Firefox Developer Edition
- Microsoft Edge
- Safari (macOS)

### 3. Optional Tools
- **Git:** https://git-scm.com/ (for version control)
- **Node.js:** https://nodejs.org/ (for advanced tooling later)

---

## HTML5 Document Structure - Line by Line Explanation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>
```

### Line-by-Line Breakdown:

| Line | Code | Purpose |
|------|------|---------|
| 1 | `<!DOCTYPE html>` | Declares HTML5 document type (must be first line) |
| 2 | `<html lang="en">` | Root element; `lang="en"` specifies English language |
| 3 | `<head>` | Container for metadata (not displayed on page) |
| 4 | `<meta charset="UTF-8">` | Sets character encoding to UTF-8 (supports all characters) |
| 5 | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Enables responsive design on mobile devices |
| 6 | `<title>My First Webpage</title>` | Sets browser tab title (important for SEO) |
| 7 | `</head>` | Closes head section |
| 8 | `<body>` | Opens body - all visible content goes here |
| 9 | `<!-- Page content goes here -->` | HTML comment (not rendered in browser) |
| 10 | `</body>` | Closes body section |
| 11 | `</html>` | Closes root html element |

---

## Essential HTML Tags with Examples

### 1. Headings (h1-h6)
```html
<h1>Main Heading (Most Important)</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Sub-section Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```
**Rule:** Only ONE `<h1>` per page for SEO/accessibility.

### 2. Paragraphs & Text Formatting
```html
<p>This is a paragraph of text.</p>

<!-- Text formatting -->
<p><strong>Bold text</strong> (semantic importance)</p>
<p><em>Italic text</em> (emphasis)</p>
<p><mark>Highlighted text</mark></p>
<p><small>Small print</small></p>
<p>H<sub>2</sub>O (subscript)</p>
<p>E = mc<sup>2</sup> (superscript)</p>
<p><del>Deleted text</del> <ins>Inserted text</ins></p>
```

### 3. Lists

**Unordered List (bullet points):**
```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

**Ordered List (numbered):**
```html
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>
```

**Description List:**
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### 4. Links (Anchor Tags)
```html
<!-- External link -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    Visit Google
</a>

<!-- Internal link (same page) -->
<a href="#section2">Go to Section 2</a>

<!-- Email link -->
<a href="mailto:example@email.com">Email Us</a>

<!-- Phone link (mobile) -->
<a href="tel:+1234567890">Call Us</a>
```
**Attributes:**
- `href` - destination URL
- `target="_blank"` - opens in new tab
- `rel="noopener noreferrer"` - security best practice

### 5. Images
```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image" width="300" height="200">

<!-- Image with caption (HTML5) -->
<figure>
    <img src="photo.jpg" alt="Beautiful sunset" width="400">
    <figcaption>Sunset at the beach - Photo by John Doe</figcaption>
</figure>
```
**Required:** `alt` attribute (accessibility + SEO)

### 6. Semantic HTML5 Elements
```html
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Blog Post Title</h2>
            <p>Article content...</p>
        </article>
        
        <section>
            <h2>Related Posts</h2>
            <!-- More content -->
        </section>
        
        <aside>
            <h3>Sidebar</h3>
            <!-- Sidebar content -->
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
</body>
```

---

## Complete Practice Example: Personal Profile Page

Create a file named `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal profile page for John Doe">
    <title>John Doe - Web Developer</title>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>John Doe</h1>
        <p><em>Aspiring Full Stack Developer</em></p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <!-- About Section -->
        <section id="about">
            <h2>About Me</h2>
            <img src="profile.jpg" alt="John Doe smiling" width="200" height="200">
            <p>Hello! I'm <strong>John Doe</strong>, a passionate beginner learning web development.</p>
            <p>Currently mastering <mark>HTML</mark>, <mark>CSS</mark>, and <mark>JavaScript</mark>.</p>
        </section>

        <!-- Skills Section -->
        <section id="skills">
            <h2>Skills I'm Learning</h2>
            <ul>
                <li>HTML5 - Semantic markup</li>
                <li>CSS3 - Styling & Layouts</li>
                <li>JavaScript ES6+ - Interactivity</li>
                <li>Git & GitHub - Version Control</li>
                <li>VS Code - Code Editor</li>
            </ul>
        </section>

        <!-- Projects Section -->
        <section id="projects">
            <h2>My Projects</h2>
            <article>
                <h3>Project 1: Personal Portfolio</h3>
                <p>A simple portfolio website built with HTML & CSS.</p>
                <p><a href="https://github.com/johndoe/portfolio" target="_blank">View on GitHub</a></p>
            </article>
            <article>
                <h3>Project 2: Todo List App</h3>
                <p>Interactive todo application using JavaScript.</p>
                <p><a href="https://github.com/johndoe/todo-app" target="_blank">View on GitHub</a></p>
            </article>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <h2>Contact Me</h2>
            <address>
                <p>Email: <a href="mailto:john.doe@email.com">john.doe@email.com</a></p>
                <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
            </address>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <hr>
        <p>&copy; 2025 John Doe. Built with <strong>HTML5</strong> during Day 2 of Web Dev Course.</p>
    </footer>
</body>
</html>
```

---

## VS Code Setup Instructions

### 1. Create Project Folder
```
1. Open VS Code
2. File → Open Folder → Create "day2-html-basics" folder
3. Click "Create" then "Select Folder"
```

### 2. Create HTML File
```
1. Right-click in Explorer → New File
2. Name: index.html
3. Type: ! then press Tab (Emmet shortcut for HTML5 boilerplate)
```

### 3. Live Preview with Live Server
```
1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"
3. Browser opens at http://127.0.0.1:5500
4. Auto-refreshes on save (Ctrl+S / Cmd+S)
```

### 4. Useful VS Code Shortcuts
| Shortcut | Action |
|----------|--------|
| `!` + `Tab` | Generate HTML5 boilerplate |
| `Ctrl+S` / `Cmd+S` | Save file |
| `Alt+Z` | Toggle word wrap |
| `Ctrl+/` | Toggle comment |
| `Shift+Alt+F` | Format document (with Prettier) |
| `Ctrl+P` | Quick file open |

---

## Validation & Best Practices

### 1. HTML Validation
- **W3C Validator:** https://validator.w3.org/
- Paste code or upload file to check for errors

### 2. Best Practices Checklist
- [ ] Use semantic HTML elements
- [ ] Include `lang` attribute on `<html>`
- [ ] Add `alt` text to all images
- [ ] Use only ONE `<h1>` per page
- [ ] Properly nest tags (close in reverse order)
- [ ] Use lowercase for all tags/attributes
- [ ] Quote attribute values: `class="example"`
- [ ] Add `meta viewport` for mobile
- [ ] Include `meta description` for SEO
- [ ] Validate HTML before deploying

### 3. Common Mistakes to Avoid
```html
<!-- ❌ Wrong - Missing closing tag -->
<p>This paragraph is not closed

<!-- ✅ Correct -->
<p>This paragraph is properly closed.</p>

<!-- ❌ Wrong - Improper nesting -->
<strong><em>Bold and italic</strong></em>

<!-- ✅ Correct -->
<strong><em>Bold and italic</em></strong>

<!-- ❌ Wrong - No alt attribute -->
<img src="photo.jpg">

<!-- ✅ Correct -->
<img src="photo.jpg" alt="Descriptive text">
```

---

## Day 2 Homework Assignment

### Task 1: Create Your Profile Page
Build a personal profile page (`profile.html`) including:
- [ ] Proper HTML5 structure
- [ ] Header with your name & navigation
- [ ] About section with photo & bio
- [ ] Skills list (unordered)
- [ ] Education/Experience (ordered list)
- [ ] Contact info in footer
- [ ] At least 3 semantic elements (header, main, footer, section, article, aside, nav)

### Task 2: Recipe Page
Create `recipe.html` with:
- [ ] Recipe title (h1)
- [ ] Image with alt text
- [ ] Description paragraph
- [ ] Ingredients (unordered list)
- [ ] Instructions (ordered list)
- [ ] Prep time, cook time, servings (description list)
- [ ] Link back to profile page

### Task 3: Validate Both Pages
- [ ] Test in W3C Validator
- [ ] Fix all errors/warnings
- [ ] Test in browser with Live Server

---

## Resources for Further Learning

### Documentation
- **MDN Web Docs (HTML):** https://developer.mozilla.org/en-US/docs/Web/HTML
- **W3Schools HTML Tutorial:** https://www.w3schools.com/html/
- **HTML5 Spec:** https://html.spec.whatwg.org/

### Practice Platforms
- **CodePen:** https://codepen.io/ (online editor)
- **freeCodeCamp:** https://www.freecodecamp.org/ (interactive lessons)
- **Frontend Mentor:** https://www.frontendmentor.io/ (real projects)

### Cheat Sheets
- **HTML5 Tag Reference:** https://htmlcheatsheet.com/
- **Emmet Cheat Sheet:** https://docs.emmet.io/cheat-sheet/

---

## Next Lesson Preview: Day 3 - CSS Basics
- Introduction to CSS (Cascading Style Sheets)
- Selectors, properties, and values
- Box model, colors, typography
- Styling your Day 2 HTML pages

---

**Happy Coding! 🚀**
*Remember: Practice makes perfect. Build something every day!*