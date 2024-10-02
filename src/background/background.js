// src/background/background.js

// Listener for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startTTS') {
      // Start Text-to-Speech
      chrome.tts.speak(request.text, {
        rate: parseFloat(request.rate) || 1.0,
        pitch: parseFloat(request.pitch) || 1.0,
        lang: request.lang || 'en-US',
        voiceName: request.voice || undefined,
        onEvent: (event) => {
          if (event.type === 'end') {
            sendResponse({ status: 'finished' });
          } else if (event.type === 'word') {
            // Send the current word to the content script
            console.log('event : ', event, sender);
            chrome.tabs.sendMessage(sender.tab.id, { action: 'highlightWord', word: event.char });
          }
        }
      });
      return true; // Keeps the message channel open for sendResponse
    } else if (request.action === 'stopTTS') {
      chrome.tts.stop();
      sendResponse({ status: 'stopped' });
    }
});
  