🔊 Accessible Audio Controls (HTML + ARIA)

This project is a simple audio control interface built with HTML and enhanced with basic ARIA attributes to improve accessibility for screen reader users.

📚 What I Learned

- How to use ARIA attributes to make custom controls more accessible

- How aria-labelledby works to connect multiple text elements to one control

- Why accessibility matters even in simple UI components

- How screen readers interpret labels and descriptions

🛠️ Features

- Play and Mute buttons

- A volume slider using "input type='range'"

Combined label + description using:

'''html
- aria-labelledby="volume-label volume-description"
'''
_______

💡 Key Takeaway

ARIA isn’t just a “nice extra” — it’s something every web developer should try to include whenever possible. Accessibility matters because anyone can experience a disability at any point in life. By writing accessible code now, we’re helping build a web that everyone can use, including our future selves if life ever throws something unexpected our way.