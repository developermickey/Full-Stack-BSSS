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

## 📚 APPENDIX: Complete Day-by-Day Notes

---

### 📖 DAY 2: HTML Basics - Complete Course Notes

#### Course Overview
**Day 2** focuses on fundamental HTML concepts, structure, and essential tags. Students will learn to create their first webpage with proper HTML5 structure.

#### Learning Objectives
By the end of Day 2, students will be able to:
- Understand HTML5 document structure
- Use common HTML tags (headings, paragraphs, lists, links, images)
- Create semantic HTML elements
- Validate HTML code

#### Required Software Installation

**1. Visual Studio Code (Recommended)**
- **Download:** https://code.visualstudio.com/
- **Windows:** Run installer, check "Add to PATH"
- **macOS:** Drag to Applications folder
- **Linux:** `sudo snap install code --classic` or download .deb/.rpm

**Essential Extensions to Install:**
- HTML CSS Support
- Live Server (for live preview)
- Prettier - Code formatter
- Auto Rename Tag

**2. Web Browser (for testing)**
- Google Chrome (recommended - DevTools)
- Firefox Developer Edition
- Microsoft Edge
- Safari (macOS)

**3. Optional Tools**
- **Git:** https://git-scm.com/ (for version control)
- **Node.js:** https://nodejs.org/ (for advanced tooling later)

---

#### HTML5 Document Structure - Line by Line Explanation

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

**Line-by-Line Breakdown:**

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

#### Essential HTML Tags with Examples

**1. Headings (h1-h6)**
```html
<h1>Main Heading (Most Important)</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Sub-section Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```
**Rule:** Only ONE `<h1>` per page for SEO/accessibility.

**2. Paragraphs & Text Formatting**
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

**3. Lists**

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

**4. Links (Anchor Tags)**
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

**5. Images**
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

**6. Semantic HTML5 Elements**
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

#### Complete Practice Example: Personal Profile Page

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

#### VS Code Setup Instructions

**1. Create Project Folder**
```
1. Open VS Code
2. File → Open Folder → Create "day2-html-basics" folder
3. Click "Create" then "Select Folder"
```

**2. Create HTML File**
```
1. Right-click in Explorer → New File
2. Name: index.html
3. Type: ! then press Tab (Emmet shortcut for HTML5 boilerplate)
```

**3. Live Preview with Live Server**
```
1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"
3. Browser opens at http://127.0.0.1:5500
4. Auto-refreshes on save (Ctrl+S / Cmd+S)
```

**4. Useful VS Code Shortcuts**

| Shortcut | Action |
|----------|--------|
| `!` + `Tab` | Generate HTML5 boilerplate |
| `Ctrl+S` / `Cmd+S` | Save file |
| `Alt+Z` | Toggle word wrap |
| `Ctrl+/` | Toggle comment |
| `Shift+Alt+F` | Format document (with Prettier) |
| `Ctrl+P` | Quick file open |

---

#### Validation & Best Practices

**1. HTML Validation**
- **W3C Validator:** https://validator.w3.org/
- Paste code or upload file to check for errors

**2. Best Practices Checklist**
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

**3. Common Mistakes to Avoid**
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

#### Day 2 Homework Assignment

**Task 1: Create Your Profile Page**
Build a personal profile page (`profile.html`) including:
- [ ] Proper HTML5 structure
- [ ] Header with your name & navigation
- [ ] About section with photo & bio
- [ ] Skills list (unordered)
- [ ] Education/Experience (ordered list)
- [ ] Contact info in footer
- [ ] At least 3 semantic elements (header, main, footer, section, article, aside, nav)

**Task 2: Recipe Page**
Create `recipe.html` with:
- [ ] Recipe title (h1)
- [ ] Image with alt text
- [ ] Description paragraph
- [ ] Ingredients (unordered list)
- [ ] Instructions (ordered list)
- [ ] Prep time, cook time, servings (description list)
- [ ] Link back to profile page

**Task 3: Validate Both Pages**
- [ ] Test in W3C Validator
- [ ] Fix all errors/warnings
- [ ] Test in browser with Live Server

---

#### Resources for Further Learning

**Documentation**
- **MDN Web Docs (HTML):** https://developer.mozilla.org/en-US/docs/Web/HTML
- **W3Schools HTML Tutorial:** https://www.w3schools.com/html/
- **HTML5 Spec:** https://html.spec.whatwg.org/

**Practice Platforms**
- **CodePen:** https://codepen.io/ (online editor)
- **freeCodeCamp:** https://www.freecodecamp.org/ (interactive lessons)
- **Frontend Mentor:** https://www.frontendmentor.io/ (real projects)

**Cheat Sheets**
- **HTML5 Tag Reference:** https://htmlcheatsheet.com/
- **Emmet Cheat Sheet:** https://docs.emmet.io/cheat-sheet/

---

### 📖 DAY 3: HTML Practice & Reinforcement

**Note:** Day 3 uses the same core notes as Day 2 (`Day3-HTML-Basics.md` is a copy of Day 2 notes). The focus is on **applying Day 2 concepts** through practice.

**Practice Files:**
- `Day3/index.html` - Shop by category demo
- `Day3/classTask/index.html` - Assignment: Mukesh Pathak profile page

---

### 📖 DAY 4: HTML Media & Semantic Practice

#### Core Topics
- Video (`<video>`) and Audio (`<audio>`) tags with controls
- 5 Beginner Practice Tasks

#### Day 4 Files
- `Day4/Day4-HTML-Basics.md` - Core notes (same as Day 2)
- `Day4/beginner-html-tasks.md` - 5 Practice Tasks (detailed below)
- `Day4/Untitled-1.md` - Task 3 notes (video/audio reference)

---

#### 5 Beginner HTML Practice Tasks (from `beginner-html-tasks.md`)

**Task 1: Personal Profile**
- Add name using `<h1>` tag
- Add profile image using `<img>` tag
- Add short introduction using `<p>` tag
- Add unordered list with 3 hobbies
- Add link to favorite website using `<a>` tag
- **Bonus:** Use semantic HTML (`<header>`, `<main>`, `<footer>`)

**Task 2: Simple Blog Article**
- Use: `<header>`, `<main>`, `<article>`, `<footer>`
- Inside article: blog title, image, 2+ paragraphs, list of 3 important points, author name
- **Bonus:** Add `<time>` element for publication date

**Task 3: My Media Page**
- Heading: "My Media"
- One video using `<video>` tag with controls
- One audio file using `<audio>` tag with controls
- Heading and short description for both
- Organize using semantic HTML
- **Bonus:** Use `<section>` for video and audio areas

**Task 4: Restaurant Menu**
- Restaurant name as main heading
- 3 sections: Starters, Main Course, Desserts
- Unordered list for each category (3+ items each)
- Food/restaurant image
- Contact information in footer
- **Bonus:** Use semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`)

**Task 5: News Article Page**
- Structure: `<header>` (website name), `<nav>` (3+ links), `<main>`, `<article>` (news), `<aside>` (related news), `<footer>` (copyright)
- Inside article: headline, image, 2+ paragraphs, list of 3 points, author name, publication date
- **Bonus:** Use `<time>` for publication date

**Challenge Rules:** Complete all 5 tasks using **HTML only** (no CSS, JS, Bootstrap, Tailwind)

---

### 📖 DAY 5: HTML Tables & Forms

**Note:** Day 5 core notes file (`Day5-HTML-Basics.md`) is a copy of Day 2 notes. The actual Day 5 content focuses on Tables & Forms as shown in the practice files.

#### Tables
- Table structure: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- Rows (`<tr>`), headers (`<th>`), data (`<td>`)
- Attributes: `colspan`, `rowspan`, `border`

#### Forms
- `<form>` with `action`, `method` (GET/POST), `enctype`
- `<label>` with `for` attribute
- Input types: text, email, password, date, datetime-local, color, file
- Select dropdown (`<select>`, `<option>`)
- Checkboxes & Radio buttons
- Buttons: submit, reset, button
- Common attributes: name, id, value, placeholder, required, disabled, readonly

#### Practice Files
- `Day5/index.html` - Student table with rowspan
- `Day5/table.html` - Order list table
- `Day5/form.html` - Complete form demo
- `Day5/Rsion.html` - Additional practice

---

### 📖 DAY 6: Form Elements Review + CSS Introduction

**Notes Source:** `Day6/html-notes.md`

#### HTML Review
- All heading levels, paragraph formatting
- Bold/Italic/Strong/Em/Mark tags
- Lists (ul, ol, dl)
- Links (target _blank/_self)
- Images, Video, Audio
- `<pre>` tag for preformatted text

#### Form Elements
- File upload (`<input type="file">`)
- Checkboxes (multiple selection)
- Radio buttons (single selection, same `name`)

#### CSS Basics
- Three ways to add CSS: Inline, Internal (`<style>`), External (`<link>`)
- Selectors: Tag, Class (`.`), ID (`#`)
- Properties: `background-color`, `color`
- Box model introduction

---

#### Day 6 Detailed Notes (from `html-notes.md`)

**Table**
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```
**Attributes:** `border`, `cellpadding`, `cellspacing`, `colspan`, `rowspan`

**Form**
```html
<form action="/submit" method="POST">
  <!-- form elements -->
</form>
```
**Attributes:** `action`, `method` (GET/POST), `enctype` (multipart/form-data for files)

**Label**
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```
Links label to input via `for` attribute matching input's `id`

**Input Types**

**Text**
```html
<input type="text" name="username" placeholder="Enter username" required>
```

**Email**
```html
<input type="email" name="email" placeholder="Enter email" required>
```
Built-in email validation

**Date**
```html
<input type="date" name="dob">
```
Date picker (YYYY-MM-DD)

**Datetime-local**
```html
<input type="datetime-local" name="appointment">
```
Date & time picker (no timezone)

**File**
```html
<input type="file" name="avatar" accept="image/*" multiple>
```
File upload. Use `enctype="multipart/form-data"` on form

**Checkbox**
```html
<input type="checkbox" name="agree" id="agree" value="yes">
<label for="agree">I agree</label>
```
Single or multiple selections

**Radio Button**
```html
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>

<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>
```
Same `name` = mutually exclusive group

**Button**
```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click me</button>
```
**Types:** `submit` (default), `reset`, `button`

**Select Dropdown**
```html
<select name="country" id="country">
  <option value="">Select country</option>
  <option value="in">India</option>
  <option value="us">USA</option>
  <option value="uk">UK</option>
</select>
```
**Attributes:** `multiple` (allow multiple), `size` (visible options)

**Color Picker**
```html
<input type="color" name="favcolor" value="#ff0000">
```
Returns hex color value (#rrggbb)

**Common Attributes**

| Attribute | Description |
|-----------|-------------|
| `name` | Form field name (sent to server) |
| `id` | Unique identifier (for label/js) |
| `value` | Initial/default value |
| `placeholder` | Hint text |
| `required` | Must fill before submit |
| `disabled` | Field not interactive |
| `readonly` | Cannot edit but submitted |
| `autocomplete` | on/off browser autocomplete |

---

#### Day 6 Practice Files
- `Day6/index.html` - Radio buttons, checkboxes, file input
- `Day6/Rev.html` - Review: All HTML basics + video/audio
- `Day6/css.html` - CSS basics: selectors, inline/internal styles
- `Day6/style.css` - External CSS file

---

### 📖 DAY 9: Flexbox Layout Learning Notes

**Notes Source:** `Day9/DAY9_FLEXBOX_NOTES.md`

#### Overview
This project demonstrates a **responsive navigation header** built with **CSS Flexbox**. It's a practical example of how Flexbox simplifies layout creation compared to traditional float/positioning methods.

#### File Structure
```
Day9/
├── index.html      # HTML structure
├── style.css       # Styling with Flexbox
├── logo.png        # Logo image
└── task1/          # Additional practice files
```

---

#### HTML Analysis (index.html)

**1. Document Declaration & Meta Tags**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex Box</title>
    <link rel="stylesheet" href="style.css">
</head>
```

**Key Concepts:**
| Tag | Purpose | Why It Matters |
|-----|---------|----------------|
| `<!DOCTYPE html>` | Declares HTML5 | Ensures standards mode rendering |
| `<meta charset="UTF-8">` | Character encoding | Supports all languages/emojis |
| `<meta name="viewport">` | Responsive design | **Critical for mobile-first design** |
| `<link rel="stylesheet">` | Links external CSS | Separates structure from presentation |

**2. Header Structure**
```html
<header class="header">
    <img class="header-logo" src="./logo.png" alt="Amazon Logo" width="150">
    <nav class="header-menu">
        <a class="header-menu-item" href="#">Home</a>
        <a class="header-menu-item" href="#">About Us</a>
        <a class="header-menu-item" href="#">Shop</a>
        <a class="header-menu-item" href="#">Contact</a>
        <a class="header-menu-item" href="#">Mobile</a>
    </nav>
    <button class="header-btn">Login</button>
</header>
```

**Semantic HTML Elements Used:**
| Element | Semantic Meaning | Accessibility Benefit |
|---------|------------------|----------------------|
| `<header>` | Page/intro header | Screen readers announce as banner |
| `<nav>` | Navigation section | Screen readers provide nav shortcuts |
| `<a>` | Links | Keyboard navigable, announced as links |
| `<button>` | Interactive button | Focusable, activates with Enter/Space |
| `<img>` | Image content | `alt` text for screen readers |

**BEM Class Naming Convention:**
- `.header` - Block (standalone component)
- `.header-logo` - Element (part of header)
- `.header-menu` - Element
- `.header-menu-item` - Element
- `.header-btn` - Element

---

#### CSS Analysis (style.css)

**1. Global Reset & Font Import**
```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Space Grotesk", sans-serif;
}
```

**Concepts Explained:**
| Property | Value | Explanation |
|----------|-------|-------------|
| `@import` | Google Fonts | Loads external font; `display=swap` prevents FOIT |
| `*` (universal selector) | All elements | Applies reset to everything |
| `margin: 0; padding: 0;` | Removes defaults | Browser consistency |
| `box-sizing: border-box;` | **Critical!** | Width/height INCLUDE padding + border |
| `font-family` | Space Grotesk | Modern variable font (300-700 weights) |

**Why `box-sizing: border-box` matters:**
```
Without: width = content only → padding/border ADDS to width
With:    width = content + padding + border → predictable sizing
```

**2. HTML/Body Full Height**
```css
html, body {
  width: 100%;
  height: 100%;
  background-color: white;
}
```
- Sets full viewport dimensions
- Enables percentage-based heights on children

**3. Header - The Flex Container**
```css
.header {
  width: 100%;
  height: 80px;
  background-color: rgb(5, 5, 36);  /* Dark navy */
  display: flex;                     /* 🎯 FLEXBOX STARTS HERE */
  justify-content: space-between;    /* X Axis (main axis) */
  align-items: center;               /* Y Axis (cross axis) */
  padding: 0px 100px;
}
```

**Flexbox Theory - Core Concepts:**
```
┌─────────────────────────────────────────────────────────┐
│  FLEX CONTAINER (.header)                               │
│  ┌──────────┐  ┌────────────────────┐  ┌────────────┐  │
│  │  Logo    │  │   Nav Menu         │  │  Button    │  │
│  │ (item)   │  │ (item - flex cont.)│  │ (item)     │  │
│  └──────────┘  └────────────────────┘  └────────────┘  │
│                                                         │
│  Main Axis (→): justify-content: space-between         │
│  Cross Axis (↓): align-items: center                   │
└─────────────────────────────────────────────────────────┘
```

| Property | Value | Axis | Visual Result |
|----------|-------|------|---------------|
| `display: flex` | - | - | Children become flex items |
| `justify-content` | `space-between` | Main (X) | **Max space BETWEEN items**, flush to edges |
| `align-items` | `center` | Cross (Y) | **Vertically centered** in 80px height |
| `padding` | `0 100px` | - | 100px left/right breathing room |

**justify-content Options (Main Axis):**
```
flex-start    │ [■ ■ ■ ■]                    (default)
flex-end      │                    [■ ■ ■ ■]
center        │          [■ ■ ■ ■]          
space-between │ [■        ■        ■        ■]  ← USED HERE
space-around  │  [■    ■    ■    ■]          
space-evenly  │ [  ■  ■  ■  ■  ]            
```

**align-items Options (Cross Axis):**
```
stretch       │ ████████  (default - fills height)
flex-start    │ ████
center        │     ████      ← USED HERE
flex-end      │         ████
baseline      │     ████  (text baseline aligned)
```

**4. Navigation Menu - Nested Flex Container**
```css
.header .header-menu {
  display: flex;       /* Nested flex container */
  gap: 30px;           /* Modern spacing! */
}
```

**`gap` Property (Modern CSS):**
- Replaces `margin` hacks for spacing
- Only applies BETWEEN items (not edges)
- Works in both Flexbox and Grid
- **Browser support:** Excellent (all modern browsers)

**5. Menu Items - Styling Links**
```css
.header .header-menu .header-menu-item {
  color: #fff;
  text-decoration: none;      /* Removes underline */
  font-size: 20px;
  transition: color 0.9s ease; /* Smooth hover */
}

.header .header-menu .header-menu-item:hover {
  color: #f79b34;             /* Orange on hover */
}
```

**Transition Theory:**
```css
transition: property duration timing-function delay;
/* Shorthand: */ 
transition: color 0.9s ease;
/* Longhand: */
transition-property: color;
transition-duration: 0.9s;
transition-timing-function: ease;
transition-delay: 0s;
```

| Timing Function | Curve | Feel |
|-----------------|-------|------|
| `ease` | Slow → Fast → Slow | Natural (default) |
| `linear` | Constant speed | Mechanical |
| `ease-in` | Slow → Fast | Accelerating |
| `ease-out` | Fast → Slow | Decelerating |
| `ease-in-out` | Slow → Fast → Slow | Smooth |

**6. Button - Interactive Element**
```css
.header .header-btn {
  padding: 12px 28px;           /* Vertical | Horizontal */
  border: 2px solid #f79b34;    /* Orange border */
  background-color: transparent;/* See-through bg */
  color: #fff;                  /* White text */
  border-radius: 50px;          /* Pill shape */
  font-size: 20px;
  transition: background-color 0.9s ease;
}

.header .header-btn:hover {
  background-color: #f79b34;    /* Fill orange on hover */
}
```

**Button Design Decisions:**
| Property | Purpose |
|----------|---------|
| `transparent` bg | Shows it's secondary action |
| `border: 2px` | Clear click target |
| `border-radius: 50px` | Modern "pill" shape |
| `transition` on bg-color | Smooth fill animation |
| `hover` state | Visual feedback for interactivity |

---

#### Flexbox Theory Deep Dive

**Flex Container Properties**
| Property | Values | Controls |
|----------|--------|----------|
| `display` | `flex` / `inline-flex` | Activates flex context |
| `flex-direction` | `row` / `row-reverse` / `column` / `column-reverse` | Main axis direction |
| `flex-wrap` | `nowrap` / `wrap` / `wrap-reverse` | Multi-line behavior |
| `justify-content` | See above | Main axis alignment |
| `align-items` | See above | Cross axis alignment |
| `align-content` | Same as justify-content | Multi-line cross axis |
| `gap` / `row-gap` / `column-gap` | `<length>` | Spacing between items |

**Flex Item Properties**
| Property | Values | Controls |
|----------|--------|----------|
| `flex-grow` | `<number>` (default 0) | Expand to fill space |
| `flex-shrink` | `<number>` (default 1) | Shrink if needed |
| `flex-basis` | `<length>` / `auto` | Initial size before grow/shrink |
| `flex` | Shorthand: `grow shrink basis` | Combined control |
| `align-self` | Same as align-items | Override per item |
| `order` | `<integer>` (default 0) | Visual reorder |

**Flex Shorthand Explained**
```css
/* Common patterns */
flex: 1;           /* = 1 1 0% - grow/shrink equally, no base size */
flex: auto;        /* = 1 1 auto - grow/shrink from content size */
flex: 0 0 200px;   /* = fixed 200px, no grow/shrink */
flex: 2 1 100px;   /* = grow 2x, shrink 1x, base 100px */
```

---

#### Responsive Design Notes

**Current Breakpoints (Implicit)**
The design works at desktop widths but needs media queries for mobile:

```css
/* Mobile-first approach - add to style.css */
@media (max-width: 768px) {
  .header {
    padding: 0 20px;           /* Less horizontal padding */
    height: auto;              /* Allow height to grow */
    flex-wrap: wrap;           /* Allow wrapping */
    gap: 15px;                 /* Space between wrapped items */
    justify-content: center;   /* Center when wrapped */
  }
  
  .header-menu {
    order: 3;                  /* Move menu below logo/btn */
    width: 100%;               /* Full width on mobile */
    justify-content: center;   /* Center menu items */
    gap: 15px;                 /* Tighter mobile spacing */
  }
  
  .header-menu-item {
    font-size: 16px;           /* Smaller text on mobile */
  }
  
  .header-btn {
    padding: 10px 20px;        /* Smaller touch target */
    font-size: 16px;
  }
}
```

**Viewport Meta Tag Deep Dive**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width` → Page width = screen width in CSS pixels
- `initial-scale=1.0` → No zoom on load
- **Without this:** Mobile browsers render at ~980px desktop width, then zoom out

---

#### Learning Exercises for Students

**Exercise 1: Inspect & Modify**
1. Open DevTools (F12) → Elements tab
2. Click `.header` → Toggle `display: flex` off/on
3. Change `justify-content` to each value → Observe
4. Change `align-items` to each value → Observe

**Exercise 2: Add a Search Bar**
```html
<!-- In header, before button -->
<div class="header-search">
  <input type="search" placeholder="Search...">
  <button>🔍</button>
</div>
```

```css
.header-search {
  display: flex;
  border: 1px solid #fff3;
  border-radius: 50px;
  overflow: hidden;
}
.header-search input {
  border: none;
  background: transparent;
  color: #fff;
  padding: 8px 16px;
  outline: none;
}
```

**Exercise 3: Make Logo a Link**
```html
<a href="/" class="header-logo-link">
  <img class="header-logo" src="./logo.png" alt="Amazon Logo" width="150">
</a>
```
```css
.header-logo-link { display: block; } /* Ensures full clickable area */
```

**Exercise 4: Mobile Hamburger Menu (Advanced)**
- Hide `.header-menu` on mobile
- Add hamburger button (☰)
- Use JavaScript to toggle `.header-menu` visibility
- Animate with `max-height` transition

---

#### Key Takeaways

| Concept | Summary |
|---------|---------|
| **Flexbox** | 1D layout system (row OR column) |
| **Main Axis** | Defined by `flex-direction` (default: row) |
| **Cross Axis** | Perpendicular to main axis |
| **Container vs Items** | Properties apply to different elements |
| **`gap`** | Modern, clean spacing (replaces margins) |
| **`box-sizing: border-box`** | Essential for predictable sizing |
| **Semantic HTML** | Improves accessibility & SEO |
| **Transitions** | Enhance UX with smooth state changes |
| **BEM Naming** | Scalable, readable CSS architecture |

---

#### Further Reading
1. **MDN Flexbox Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
2. **CSS-Tricks Complete Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
3. **Flexbox Froggy (Game):** https://flexboxfroggy.com/
4. **Flexbox Defense (Game):** http://www.flexboxdefense.com/
5. **Can I Use - Flexbox:** https://caniuse.com/flexbox
6. **Can I Use - Gap:** https://caniuse.com/css-gap

---

#### Quick Reference Card

```
FLEX CONTAINER (parent)
├── display: flex
├── flex-direction: row | column
├── flex-wrap: nowrap | wrap
├── justify-content: start | center | end | between | around | evenly
├── align-items: stretch | start | center | end | baseline
├── align-content: (multi-line only)
└── gap: 10px

FLEX ITEM (children)
├── flex-grow: 0
├── flex-shrink: 1
├── flex-basis: auto
├── flex: 1 (shorthand)
├── align-self: auto | stretch | center | etc
└── order: 0
```

---

### 📖 DAY 1: HTML Introduction & Basics

**Overview:** First day covering fundamental HTML concepts with hands-on practice.

**Key Topics Covered:**
- HTML5 Document Structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Headings (h1-h6)
- Paragraphs & Text Formatting (`<i>`, `<b>`, `<strong>`, `<em>`, `<mark>`, `<br>`)
- Anchor Tags (`<a>`) - external links with `target="_blank"`
- Images (`<img>`) - with width, height, alt, title attributes
- Lists: Ordered (`<ol>`), Unordered (`<ul>`), Description (`<dl>`, `<dt>`, `<dd>`)
- Semantic vs Non-Semantic Tags
  - **Semantic:** `<section>`, `<header>`, `<footer>`, `<main>`, `<article>`, `<aside>`, `<strong>`, `<em>`, `<mark>`, `<details>`, `<time>`
  - **Non-Semantic:** `<div>`
- Media: `<video>` (with controls, autoplay), `<audio>` (with controls, muted)
- Tables: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `border` attribute
- Forms: `<form>`, `<label>`, `<input>` types (text, number, email, password, file), `<button type="submit">`

**Practice File:** `Day1/index.html` - Comprehensive demo page covering all above topics

**HTML Comments:** `<!-- comment -->` (shortcut: `Ctrl + /`)

---

### 📖 DAY 7: CSS Introduction - Basic Styling

**Overview:** Introduction to CSS (Cascading Style Sheets) with basic selectors and properties.

**Key Topics:**
- **CSS Reset:** Universal selector (`*`) for margin, padding, box-sizing
- **HTML/Body Full Height:** `width: 100%; height: 100%;`
- **External CSS:** `<link rel="stylesheet" href="main.css">`
- **Tag Selectors:** `h1`, `p`
- **CSS Properties:**
  - `font-size`, `color`, `font-weight`, `font-style`, `text-transform`
  - `margin-bottom`, `padding`
  - `background-color`, `color`

**Files:**
- `Day7/index.html` - Basic HTML with h1 and p tags
- `Day7/main.css` - Reset + styling for h1 (yellow, 64px) and p (italic, capitalize)

**Key Concepts:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  padding: 20px;
}

h1 {
  font-size: 64px;
  color: yellow;
  font-weight: 500;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  font-style: italic;
  text-transform: capitalize;
}
```

---

### 📖 DAY 8: CSS Layout & Positioning

**Overview:** CSS positioning, flexbox basics, viewport units, and SVG animation.

**Key Topics:**
- **Viewport Units:** `vw` (view width), `vh` (view height)
- **CSS Selectors:** ID (`#`), Class (`.`), Descendant combinator
- **Box Model:** `box-sizing: border-box`
- **Positioning:** `position: absolute`, `top/left: 50%`, `transform: translate(-50%, -50%)` for centering
- **Flexbox Preview:** `display: flex`, `align-items`, `justify-content`
- **Border Radius:** `border-radius: 10px`, `50px` (pill shape)
- **SVG Animation:** CSS transitions on hover (`rotate`, `scale`)

**Files:**
- `Day8/index.html` - Hero section with centered container
- `Day8/style.css` - Complete styling with positioning
- `Day8/new.html` - Animated SVG icon with hover effects

**Key CSS Concepts:**
```css
#hero-section {
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.container {
  width: 300px;
  height: 200px;
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* SVG Animation */
.animated-icon .circle-group {
  transform-origin: 41px 40.5px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.animated-icon:hover .circle-group {
  transform: rotate(-90deg) scale(1.3);
}
```

---

### 📖 DAY 9: Flexbox Layout (Already Documented)
*See Day 9 Flexbox Notes above for complete details.*

---

### 📖 DAY 10: Portfolio Website - HTML Structure

**Overview:** Building a professional portfolio website with semantic HTML.

**Key Topics:**
- **Navigation Bar:** Logo, Menu links, CTA Button
- **Hero Section:** Profile image, Name, Description, Social icons, CTA button, Company logos
- **External Resources:** Remixicon icons (`ri-facebook-circle-line`, `ri-twitter-x-line`, etc.)
- **Semantic Structure:** `<header>`, `<section>`, `<nav>`, `<img>`, `<h2>`, `<p>`, `<button>`

**File:** `Day10/portfolio-website/index.html`

**Structure:**
```html
<header class="navbar">
  <div class="container">
    <div class="nav-items">
      <div class="nav-logo-wrapper"><img class="nav-logo" src="./img/logo.webp"></div>
      <nav class="nav-menus">
        <a class="nav-menu-item" href="">Home</a>
        <a class="nav-menu-item" href="">About</a>
        <a class="nav-menu-item" href="">Services</a>
        <a class="nav-menu-item" href="">Works</a>
        <a class="nav-menu-item" href="">Contact</a>
      </nav>
      <button class="nav-btn">Hire Me <i class="ri-question-answer-line"></i></button>
    </div>
  </div>
</header>

<section class="hero-section">
  <div class="container">
    <div class="hero-wrapper">
      <div class="hero-left">
        <div class="hero-img-wrapper"><img class="hero-profile-img" src="./img/profile.png"></div>
        <h2>Bentos Walker</h2>
        <p>I am a Web Designer based in san francisco.</p>
        <div class="hero-social-icons"><i class="ri-facebook-circle-line"></i>...</div>
      </div>
      <div class="hero-right">
        <div class="hero-r-top">...</div>
        <div class="hero-r-bottom"><h2>Company I Worked With</h2>...</div>
      </div>
    </div>
  </div>
</section>
```

---

### 📖 DAY 11: Portfolio Website (Continued)
**Note:** Day 11 contains a `portfolio-website` folder - continuation of Day 10 project.

---

### 📖 DAY 12: Portfolio Website (Continued)
**Note:** Day 12 contains a `portfolio-website` folder - further development of portfolio project.

---

### 📖 DAY 13: YouTube Website Clone

**Overview:** Building a YouTube-style video platform layout with HTML & CSS.

**Key Topics:**
- **Header:** Menu button, Logo, Search box (with mic), Create button, Notifications, Profile
- **Sidebar Navigation:** Home, Shorts, Subscriptions, You, History, Explore sections
- **Main Content Grid:** Video cards with thumbnails, channel info, views, timestamps
- **CSS Imports:** Google Fonts (Inter, Poppins), Remixicon icons
- **Card Layout:** `.card` with `.img-wrapper` and `.card-bottom` (profile, title, view-info)

**File:** `Day13/YouTube Website/index.html` (359 lines with embedded CSS import)

**Structure:**
```html
<header class="header">
  <div class="header-left">
    <button class="menu-btn"><i class="ri-menu-line"></i></button>
    <a href="#" class="logo"><img src="./img/logo.svg" width="100"></a>
  </div>
  <div class="header-center">
    <form class="search-box"><input type="search" placeholder="Search"><button class="search-btn"><i class="ri-search-line"></i></button></form>
    <button class="mic-btn"><i class="ri-mic-line"></i></button>
  </div>
  <div class="header-right">
    <div class="create"><i class="ri-add-line"></i><span class="create-text">Create</span></div>
    <div class="notification"><i class="ri-notification-line"></i><span class="counter">9+</span></div>
    <div class="profile"><img src="..." width="30" height="30"></div>
  </div>
</header>

<div class="page-layout">
  <aside class="sidebar">
    <div class="sidebar-nav">...</div>
    <div class="sidebar-nav"><h3>Explore</h3>...</div>
    <div class="sidebar-nav"><h3>More from YouTube</h3>...</div>
  </aside>
  <main class="main-content">
    <div class="card">...</div>
    <!-- 12 video cards -->
  </main>
</div>
```

---

### 📖 DAY 14: YouTube Website (Continued)
**Note:** Day 14 contains a `YouTube Website` folder - continuation of Day 13 project.

---

### 📖 DAY 15: JavaScript Basics - DOM Manipulation

**Overview:** Introduction to JavaScript with three interactive mini-projects.

**Key Topics:**
- **DOM Selection:** `document.getElementById()`, `document.querySelector()`
- **Event Handling:** `onclick` attribute, `addEventListener()`
- **DOM Manipulation:** `innerText`, `style.display`, `style.backgroundColor`
- **Variables:** `let`, `const`
- **Functions:** Declaration, parameters, conditional logic

**Three Practice Projects:**

**1. Counter App** (`Day15/Tasks/Counter-App/`)
```html
<h1>Counter App</h1>
<div id="count">0</div>
<button onclick="inCre()">+1</button>
<button onclick="deCre()">-1</button>
```
```javascript
let count = 0;
let meraCount = document.getElementById("count");
function inCre() { count++; meraCount.innerText = count; }
function deCre() { count--; if (count >= 0) meraCount.innerText = count; }
```

**2. Background Color Change** (`Day15/Tasks/BG-Color-Change/`)
```javascript
function bgChange() {
  document.body.style.backgroundColor = "green";
}
```

**3. Text Show/Hide** (`Day15/Tasks/Text-Show-Hide/`)
```javascript
function showHide() {
  let text = document.getElementById("text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
```

---

### 📖 DAY 16: Restaurant Website - Project Start
**Note:** Day 16 contains a `restaurant-website` folder - beginning of restaurant project.

---

### 📖 DAY 17: Restaurant Website (Continued)
**Note:** Day 17 contains a `restaurant-website` folder - continuation.

---

### 📖 DAY 18: Restaurant Website (Continued)
**Note:** Day 18 contains a `restaurant-website` folder - continuation.

---

### 📖 DAY 19: Restaurant Website (Continued)
**Note:** Day 19 contains a `restaurant-website` folder - continuation.

---

### 📖 DAY 20: Restaurant Website (Continued)
**Note:** Day 20 contains a `restaurant-website` folder - continuation.

---

### 📖 DAY 21: Blogging Website - "The Quchange"

**Overview:** Complete blogging website with blog cards grid layout.

**Key Topics:**
- **Navigation Bar:** Logo, Menu links (Home, About Us, All Blog, Contact Us)
- **Blog Cards Grid:** Responsive card layout with flexbox
- **Card Structure:** Image wrapper, Title, Category badge, Date, Excerpt
- **Footer:** Copyright notice
- **Google Fonts:** Poppins (100-900 weights)
- **CSS Reset:** Universal selector with box-sizing

**Files:**
- `Day21/index.html` - Blog homepage with 10 blog cards
- `Day21/style.css` - Complete styling

**Key CSS:**
```css
.cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.cards .link {
  width: 450px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #ddd;
  flex: 0 0 450px;
  min-height: 500px;
}

.nav-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-block .nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}
```

---

### 📖 DAY 22: Blogging Website - Responsive + Mobile Menu

**Overview:** Enhanced blog website with mobile-responsive hamburger menu and single blog page.

**Key Topics:**
- **Mobile Hamburger Menu:** CSS-only toggle with JavaScript
- **Media Queries:** `@media (max-width: 768px)`
- **Single Blog Page:** `single-blog.html` with detailed article layout
- **Responsive Cards:** Full-width on mobile (`width: 100%`)
- **Navigation Icons:** Remixicon menu icon (`ri-menu-3-line`)

**Files:**
- `Day22/index.html` - Updated with mobile menu icon
- `Day22/style.css` - Added mobile responsive CSS (lines 119-150)
- `Day22/main.js` - Menu toggle functionality
- `Day22/single-blog.html` - Individual blog post page

**Mobile Menu CSS:**
```css
.menu-icon {
  display: none;
}

@media (max-width: 768px) {
  .container { padding: 0 15px; }
  .nav-block .nav-menu {
    display: none;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    z-index: 9;
    background-color: #000;
    width: 100%;
    top: 80px;
    left: 0px;
  }
  .menu-icon {
    display: inline-block;
    color: #fff;
    font-size: 32px;
  }
  .cards .link {
    width: 100%;
    flex: 0 0 100%;
  }
}
```

---

### 📖 DAY 23: Notes Management System - Static Version

**Overview:** Notes/Task manager UI with filter functionality (static HTML/CSS).

**Key Topics:**
- **Input Section:** Text input + Add button
- **Filter Buttons:** All / Active / Completed (with active state)
- **Notes List:** Checkbox, text, Edit/Delete actions
- **Stats Bar:** Total, Active, Completed counters
- **CSS Transitions:** Hover effects, focus states, button transitions
- **Visual States:** Completed notes with strikethrough

**Files:**
- `Day23/index.html` - Complete static UI
- `Day23/style.css` - Full styling with transitions

**Features:**
- Filter buttons with `.active` state styling
- Note items with checkbox, text, edit/delete buttons
- Completed state: `text-decoration: line-through; color: #999`
- Stats footer with counts

---

### 📖 DAY 24: Notes Management System - Dynamic (JavaScript + localStorage)

**Overview:** Fully functional notes app with CRUD operations and localStorage persistence.

**Key Topics:**
- **State Management:** `notes` array from `localStorage`
- **CRUD Operations:** Create, Read, Update, Delete
- **Filtering:** All / Active / Completed
- **Inline Editing:** Click Edit → input field → Save/Cancel
- **Persistence:** `localStorage.setItem()`, `JSON.parse/stringify`
- **Event Delegation:** Inline handlers for dynamic elements
- **XSS Prevention:** `escapeHtml()` function
- **Global Functions:** Attached to `window` for inline onclick

**Files:**
- `Day24/index.html` - Clean HTML (notes rendered dynamically)
- `Day24/style.css` - Enhanced styling with empty states, mobile responsive
- `Day24/main.js` - Complete application logic (182 lines)

**JavaScript Functions:**
```javascript
// State
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentFilter = "all";
let editingId = null;

// Core Functions
addNote()           // Create new note with timestamp
toggleComplete(id)  // Toggle completed status
startEdit(id)       // Enter edit mode
saveEdit(id)        // Save edited text
cancelEdit()        // Cancel editing
deleteNote(id)      // Delete with confirmation
saveNotes()         // Persist to localStorage
getFilteredNotes()  // Filter by currentFilter
renderNotes()       // Re-render entire list
updateStats()       // Update counter display
escapeHtml(text)    // XSS prevention
```

**Features:**
- Enter key to add note
- Inline editing with Save/Cancel
- localStorage persistence across sessions
- Filter buttons (All/Active/Completed)
- Real-time stats (Total/Active/Completed)
- Empty states for each filter
- Mobile responsive (`@media max-width: 480px`)

---

### 📖 DAY 25: CSS Button Styling Practice

**Overview:** Simple button styling exercise with border-radius and transitions.

**File:** `Day25/index.html` + `Day25/style.css`

**CSS:**
```css
button {
  padding: 20px 44px;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 24px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  transition: background-color 0.3s linear;
}

/* button:hover {
  background-color: rgb(37, 74, 221);
} */
```

**Key Concepts:**
- Asymmetric border-radius (top-left + bottom-right)
- Smooth transition on hover (commented out)
- Clean button styling

---

## 📁 Complete Project Structure Summary

```
Full Stack BSSS/
├── Day1/              # HTML Introduction (index.html)
├── Day2/              # HTML Basics - Complete Notes + Practice
├── Day3/              # HTML Practice & Reinforcement
├── Day4/              # HTML Media & Semantic Practice (5 Tasks)
├── Day5/              # HTML Tables & Forms
├── Day6/              # Forms Review + CSS Intro
├── Day7/              # CSS Introduction (index.html + main.css)
├── Day8/              # CSS Layout & Positioning (index.html, style.css, new.html)
├── Day9/              # Flexbox Layout (Complete Notes + Demo)
├── Day10/             # Portfolio Website (HTML Structure)
├── Day11/             # Portfolio Website (Continued)
├── Day12/             # Portfolio Website (Continued)
├── Day13/             # YouTube Website Clone
├── Day14/             # YouTube Website (Continued)
├── Day15/             # JavaScript Basics (3 Mini Projects)
├── Day16-20/          # Restaurant Website Project
├── Day21/             # Blogging Website "The Quchange"
├── Day22/             # Blogging Website + Mobile Menu + Single Page
├── Day23/             # Notes App - Static UI
├── Day24/             # Notes App - Dynamic (JS + localStorage)
├── Day25/             # CSS Button Styling Practice
├── Animation/         # Additional practice
├── Counter APP.html   # Standalone counter
├── HTML_CSS_Practice_Tasks_Slides.md
└── README.md          # This file
```

---

## 🎯 Learning Path Summary

| Phase | Days | Focus |
|-------|------|-------|
| **HTML Fundamentals** | 1-6 | Document structure, tags, semantic HTML, media, tables, forms |
| **CSS Basics** | 7-9 | Selectors, box model, positioning, Flexbox |
| **Project: Portfolio** | 10-12 | Real-world layout, hero sections, navigation |
| **Project: YouTube Clone** | 13-14 | Complex layouts, sidebar, card grids |
| **JavaScript Intro** | 15 | DOM manipulation, events, mini-projects |
| **Project: Restaurant** | 16-20 | Multi-page website development |
| **Project: Blog Platform** | 21-22 | Blog cards, responsive design, mobile menu |
| **Project: Notes App** | 23-24 | CRUD, localStorage, state management |
| **CSS Polish** | 25 | Advanced button styling |

---

**Happy Coding! 🚀**  
*Remember: Practice makes perfect. Build something every day!*