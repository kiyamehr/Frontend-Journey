```markdown
# CSS Grid Columns & Rows

This project is all about practicing **grid-template-columns** and **grid-template-rows**.  
I used this to figure out how to control the size of each grid track and how to create clean, flexible layouts.

## What I did
- Built a grid with custom column and row sizes  
- Used `fr` units to let the browser handle spacing  
- Tried out `repeat()`, fixed sizes, and auto  
- Added gaps to make everything cleaner

## Example
```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 150px auto 80px;
