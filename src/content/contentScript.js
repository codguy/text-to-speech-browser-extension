// src/content/contentScript.js

let currentElement = null;

// Function to highlight text
function highlightText(element) {
  if (currentElement) {
    currentElement.classList.remove('tts-highlight');
  }
  currentElement = element;
  currentElement.classList.add('tts-highlight');
}

// Listen for messages to highlight text
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlight') {
    highlightText(request.element);
    sendResponse({ status: 'highlighted' });
  }
});

// Optional: Function to retrieve selected text
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSelectedText') {
    const selectedText = window.getSelection().toString();
    sendResponse({ selectedText });
  }
});
