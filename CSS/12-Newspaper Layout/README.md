# Newspaper Layout (HTML & CSS)

This project is a basic newspaper-style webpage built using only HTML and CSS. It includes a main headline section with an image on the side and several smaller news articles displayed below. The layout uses a combination of **CSS Grid** and **Flexbox** to organize everything cleanly and responsively.

## Layout Structure

### 1. Header

A simple centered title at the top:

```html
<header>
  <h1>The Daily Local News</h1>
</header>
```

### 2. Main Content Area

The top section is made with **CSS Grid**:

```css
.content {
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 10px;
}
```

This creates two columns:

* Left column: The articles (Breaking News + Technology)
* Right column: A large image inside `.content-poster`

Each article section has padding, background color, and rounded bottom corners.

### 3. Side Image

The image sits inside a flex container so it stays centered:

```css
.content-poster {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dddddd;
  border-radius: 0 0 10px 10px;
}
```

The image is scaled using:

```css
.content-poster img {
  width: 70%;
  height: 60vh;
}
```

### 4. Bottom News Section

The bottom section uses **Flexbox** with wrapping:

```css
.news {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 10px;
}
```

Each news box:

```css
.news-description {
  background-color: #dddddd;
  padding: 0 10px;
  flex: 1 1 100px;
}
```

`flex: 1 1 100px` makes the boxes responsive:

* They grow if there’s space
* They shrink if needed
* They wrap to the next line below 100px width

## What This Project Shows

* How to use CSS Grid for a two-column layout
* How to use Flexbox to make equal-height responsive boxes
* How to structure a newspaper-like page with clean spacing
* How to combine multiple layout systems effectively

## Files

* `index.html` — page structure
* `styles.css` — all styling and layout rules

