# HTML Notes - Day 6

## Table
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

---

## Form
```html
<form action="/submit" method="POST">
  <!-- form elements -->
</form>
```

**Attributes:** `action`, `method` (GET/POST), `enctype` (multipart/form-data for files)

---

## Label
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

Links label to input via `for` attribute matching input's `id`

---

## Input Types

### Text
```html
<input type="text" name="username" placeholder="Enter username" required>
```

### Email
```html
<input type="email" name="email" placeholder="Enter email" required>
```
Built-in email validation

### Date
```html
<input type="date" name="dob">
```
Date picker (YYYY-MM-DD)

### Datetime-local
```html
<input type="datetime-local" name="appointment">
```
Date & time picker (no timezone)

### File
```html
<input type="file" name="avatar" accept="image/*" multiple>
```
File upload. Use `enctype="multipart/form-data"` on form

### Checkbox
```html
<input type="checkbox" name="agree" id="agree" value="yes">
<label for="agree">I agree</label>
```
Single or multiple selections

### Radio Button
```html
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>

<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>
```
Same `name` = mutually exclusive group

---

## Button
```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click me</button>
```

**Types:** `submit` (default), `reset`, `button`

---

## Select Dropdown
```html
<select name="country" id="country">
  <option value="">Select country</option>
  <option value="in">India</option>
  <option value="us">USA</option>
  <option value="uk">UK</option>
</select>
```

**Attributes:** `multiple` (allow multiple), `size` (visible options)

---

## Color Picker
```html
<input type="color" name="favcolor" value="#ff0000">
```
Returns hex color value (#rrggbb)

---

## Common Attributes
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