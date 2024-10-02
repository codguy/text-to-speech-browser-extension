// src/utils/helpers.js

/**
 * Retrieves the selected text on the current page.
 * @returns {string} The selected text or empty string if none.
 */
function getSelectedText() {
    return window.getSelection().toString();
  }
  
  // Export functions if using modules
  // export { getSelectedText };
  