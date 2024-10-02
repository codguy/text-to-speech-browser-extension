// tests/unit/tts.test.js

const { getSelectedText } = require('../../src/utils/helpers');

describe('Utility Functions', () => {
  test('getSelectedText should return selected text', () => {
    // Mock window.getSelection
    const mockSelection = {
      toString: jest.fn().mockReturnValue('Hello World')
    };
    global.window.getSelection = jest.fn().mockReturnValue(mockSelection);

    const selectedText = getSelectedText();
    expect(selectedText).toBe('Hello World');
    expect(mockSelection.toString).toHaveBeenCalled();
  });

  test('getSelectedText should return empty string when no text is selected', () => {
    const mockSelection = {
      toString: jest.fn().mockReturnValue('')
    };
    global.window.getSelection = jest.fn().mockReturnValue(mockSelection);

    const selectedText = getSelectedText();
    expect(selectedText).toBe('');
    expect(mockSelection.toString).toHaveBeenCalled();
  });
});
