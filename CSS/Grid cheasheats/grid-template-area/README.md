# CSS Grid Template Areas

This little project is me learning how to use **grid-template-areas** to build layouts in a clean and visual way.  
What I like about this method is that you basically “draw” your layout inside the CSS, and it makes everything a lot easier to understand.

## What I did
- Created a layout using named grid areas  
- Gave each part of the page (header, sidebar, main, footer) its own area  
- Made the layout responsive by rearranging the areas on smaller screens  

## Why I used grid areas
They make the CSS feel organized and readable. It’s also great when you want to quickly rearrange things without rewriting half the code.

## Example of the layout
```css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
