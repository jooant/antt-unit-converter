<img width="1917" height="859" alt="image" src="https://github.com/user-attachments/assets/e990eaf9-b986-413f-8ef3-1d5f2326d0d6" />

# Metric/Imperial Unit Conversion

A simple web app that converts a number between metric and imperial units: length, volume and mass. It was built as a Scrimba Fullstack Developer Path project.

## Features

- Enter a value and convert it in both directions at once:
  - Length: meters ⇄ feet
  - Volume: liters ⇄ gallons
  - Mass: kilograms ⇄ pounds
- The input box grows automatically as you type more digits
- Results are rounded to 3 decimal places
- Responsive button hover and click animations

## Tech Stack

- HTML5
- CSS3 (Flexbox, `field-sizing`)
- Vanilla JavaScript (DOM manipulation, `localStorage`)
- Google Fonts (Inter)

## Getting Started

No build step is needed.

1. Clone the repository:

    ```bash
    git clone https://github.com/jooant/antt-unit-converter.git
    cd antt-unit-converter
    ```

2. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## Project Structure

```text
├── index.html   # Page markup
├── index.css    # Styles
├── index.js     # Conversion logic
└── README.md
```

## Conversion Factors

| Conversion | Factor |
| --- | --- |
| 1 meter | 3.2808 feet |
| 1 liter | 0.2642 gallon |
| 1 kilogram | 2.2046 pounds |

## Browser Support

The auto-resizing input uses the CSS `field-sizing` property, which currently works in Chromium-based browsers (Chrome, Edge). Other browsers fall back to a minimum width.

## Author

Ant, <https://github.com/jooant/>
