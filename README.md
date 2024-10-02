# Text-to-Speech Browser Extension

## Overview
A browser extension that enables users to have long pages of text read aloud, enhancing accessibility and user experience.

## Features
- Text-to-Speech functionality using Web Speech API
- Multiple voices and languages
- Adjustable speech rate and pitch
- Highlighting text as it is read
- User settings for customization
- Keyboard shortcuts
- Bookmarking and notes
- Offline functionality

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/text-to-speech-browser-extension.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd text-to-speech-browser-extension
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Build the project:**
   ```bash
   npm run build
   ```
5. **Load the extension into your browser:**
   - **Chrome:** Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist/` folder.
   - **Firefox:** Go to `about:debugging`, click "This Firefox", then "Load Temporary Add-on", and select the `manifest.json` file.

## Usage
- Click the extension icon to open the popup.
- Select the text you want to be read aloud or let the extension read the entire page.
- Customize voice, speed, and pitch in the settings.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
