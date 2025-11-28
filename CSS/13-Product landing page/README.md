# Newspaper Layout — HTML & CSS

This project is a simple newspaper-style webpage made with HTML and CSS. It has a main headline section at the top and smaller news articles at the bottom. The layout uses CSS Grid and Flexbox to organize the content.

## How the Layout Works

### 1. Main Section (Top)

The main section uses CSS Grid:

```css
.content {
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 10px;
}
```

This creates two columns:

* Left: the main articles (breaking news + technology)
* Right: the big image

### 2. Bottom News Section

The smaller news boxes at the bottom use Flexbox:

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

`flex: 1 1 100px` means:

* The box can grow
* It can shrink
* It will wrap to the next line if it becomes smaller than 100px

This makes the boxes responsive and ensures they automatically move to the next line on smaller screens.

## Features

* Uses CSS Grid for the main layout
* Uses Flexbox for the bottom news area
* Boxes adjust automatically to screen size
* Simple and clean HTML structure
* No JavaScript needed

## Files

* `index.html` – main structure
* `styles.css` – layout and styling

