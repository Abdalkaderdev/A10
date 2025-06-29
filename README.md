# A10 Apartment 360° Virtual Tour

## Overview
This project is a Marzipano-based 360° virtual tour for the A10 apartment. It allows users to explore the apartment's spaces interactively, switch between rooms, zoom, and enjoy a seamless immersive experience on desktop and mobile devices.

## Features
- Interactive 360° panoramic views
- Scene (room) switching via hotspots or scene list
- View control buttons for navigation and zoom
- Fullscreen mode support (with fallback)
- Autorotate toggle
- Responsive design for desktop and mobile
- Info and link hotspots

## Available Spaces (Scenes)
The following spaces are available in this tour:

- Entrance
- Hall
- balcony
- bathroom
- room
- balcony.

## Technology Stack
- [Marzipano](http://www.marzipano.net/) (WebGL-based 360° media viewer)
- JavaScript (vanilla)
- HTML5 & CSS3
- [Bowser](https://github.com/lancedikson/bowser) (browser detection)
- [screenfull.js](https://github.com/sindresorhus/screenfull.js) (fullscreen API)

## How to Use
- **Navigation:** Use your mouse or touch to drag and look around.
- **Zoom:** Use the view control buttons or your mouse wheel/pinch gesture.
- **Switch Scenes:** Click hotspots in the view or use the scene list.
- **Fullscreen:** Click the fullscreen button (if available) to enter/exit fullscreen mode.
- **Autorotate:** Toggle autorotation with the autorotate button.

## Project Structure
```text
app-files/
  data.js           # Tour data (scenes, settings)
  index.html        # Main HTML file
  index.js          # Main JavaScript logic
  style.css         # Stylesheet
  img/              # UI and hotspot images
  tiles/            # Scene image tiles (by room)
  vendor/           # Third-party libraries (marzipano.js, bowser.min.js, etc.)
LICENSE.txt         # License information
README.md           # This documentation
```

## Local Development
1. **Install a local web server** (e.g., [http-server](https://www.npmjs.com/package/http-server), Python's `http.server`, or similar).
2. **Start the server** in the project root or `app-files` directory:
   - Node.js: `npx http-server app-files`
   - Python 3: `cd app-files && python -m http.server 8080`
3. **Open** `http://localhost:8080` in your browser.

> **Note:** Opening `index.html` directly with `file://` may not work due to browser security restrictions.

## Customization Tips
- **Add/Edit Scenes:** Modify `app-files/data.js` to add or update scenes and hotspots.
- **Change UI:** Edit `app-files/style.css` and images in `app-files/img/`.
- **Logic/Features:** Extend or modify `app-files/index.js` for custom behaviors.
- **Settings:** Adjust the `settings` object in `data.js` for features like fullscreen, autorotate, and view controls.

## License
See [LICENSE.txt](LICENSE.txt) for details. This project is based on the Marzipano Tool and is provided under the Apache License 2.0.

## Author & Contact
- **Author:** [Your Name Here]
- **Contact:** [your.email@example.com]

---
*Generated and customized with the Marzipano Tool.* 