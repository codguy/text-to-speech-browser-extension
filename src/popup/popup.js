// src/popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('playPause');
    const stopBtn = document.getElementById('stop');
    const voiceSelect = document.getElementById('voice');
    const rateSlider = document.getElementById('rate');
    const pitchSlider = document.getElementById('pitch');
  
    let isPlaying = false;
  
    // Populate voice options
    function populateVoices() {
      chrome.tts.getVoices((voices) => {
        voices.forEach((voice) => {
          const option = document.createElement('option');
          option.value = voice.voiceName;
          option.textContent = `${voice.lang} - ${voice.voiceName}`;
          voiceSelect.appendChild(option);
        });
      });
    }
  
    populateVoices();
  
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
      if (!isPlaying) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getSelectedText' }, (response) => {
            const text = response.selectedText || document.body.innerText;
            const voice = voiceSelect.value;
            const rate = rateSlider.value;
            const pitch = pitchSlider.value;
  
            chrome.runtime.sendMessage({
              action: 'startTTS',
              text,
              voice,
              rate,
              pitch
            }, (res) => {
              if (res.status === 'finished') {
                isPlaying = false;
                playPauseBtn.textContent = 'Play';
              }
            });
            isPlaying = true;
            playPauseBtn.textContent = 'Pause';
          });
        });
      } else {
        chrome.runtime.sendMessage({ action: 'stopTTS' }, (res) => {
          isPlaying = false;
          playPauseBtn.textContent = 'Play';
        });
      }
    });
  
    // Stop functionality
    stopBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'stopTTS' }, (res) => {
        isPlaying = false;
        playPauseBtn.textContent = 'Play';
      });
    });
});
  