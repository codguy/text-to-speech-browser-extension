# Technical Architecture

## System Overview:
- **Frontend:** React-based UI in the browser extension popup.
- **Backend:** Uses Web Speech API for Text-to-Speech processing.

## Components:
1. **UI Popup:** Renders controls for Play, Pause, Stop, Speed, and Language.
2. **Content Script:** Listens to user actions on the web page and communicates with the background script.
3. **Background Script:** Manages the Text-to-Speech API and controls playback.

## Data Flow:
1. User selects text → Content script sends text to background.
2. Background script passes text to Web Speech API → Speech output.
