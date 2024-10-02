// src/options/options.js

document.addEventListener('DOMContentLoaded', () => {
    const defaultVoiceSelect = document.getElementById('defaultVoice');
    const defaultRateSlider = document.getElementById('defaultRate');
    const defaultPitchSlider = document.getElementById('defaultPitch');
    const form = document.querySelector('form');
  
    // Populate voice options
    function populateVoices() {
      chrome.tts.getVoices((voices) => {
        voices.forEach((voice) => {
          const option = document.createElement('option');
          option.value = voice.voiceName;
          option.textContent = `${voice.lang} - ${voice.voiceName}`;
          defaultVoiceSelect.appendChild(option);
        });
      });
    }
  
    populateVoices();
  
    // Load saved settings
    chrome.storage.sync.get(['defaultVoice', 'defaultRate', 'defaultPitch'], (data) => {
      if (data.defaultVoice) {
        defaultVoiceSelect.value = data.defaultVoice;
      }
      if (data.defaultRate) {
        defaultRateSlider.value = data.defaultRate;
      }
      if (data.defaultPitch) {
        defaultPitchSlider.value = data.defaultPitch;
      }
    });
  
    // Save settings
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const settings = {
        defaultVoice: defaultVoiceSelect.value,
        defaultRate: defaultRateSlider.value,
        defaultPitch: defaultPitchSlider.value
      };
      chrome.storage.sync.set(settings, () => {
        alert('Settings saved!');
      });
    });
  });
  