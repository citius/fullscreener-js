/**
 * Get current fullscreen element
 */
export const fullscreenElement = () => {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullScreenElement
    || document.msFullscreenElement
    || document.webkitCurrentFullScreenElement
    || null;
};

/**
 * Try to enter to fullscreen mode, for specific element
 * @param {HTMLElement} element
 */
export const requestFullscreen = element => {
  if (!element) {
    return false;
  }

  if (element.tagName.toLowerCase() == 'img' && element.dataset.fullSizeSrc) {
    element.dataset.previewSrc = element.dataset.fullSizeSrc;
    element.src = element.dataset.fullSizeSrc;
  }

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.webkitEnterFullScreen) {
    element.webkitEnterFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  }
};

/**
 * Cancel fullscreen mode
 * @param [doc]
 */
export const cancelFullscreen = (doc) => {
  doc = doc || document;
  const element = fullscreenElement();

  if (element && element.tagName.toLowerCase() == 'img' && element.dataset.previewSrc) {
    element.src = element.dataset.previewSrc;
  }

  if (doc.cancelFullscreen) {
    doc.cancelFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitCancelFullScreen) {
    doc.webkitCancelFullScreen();
  } else if (doc.webkitExitFullScreen) {
    doc.webkitExitFullScreen();
  } else if (doc.msCancelFullScreen) {
    doc.msCancelFullScreen();
  }
};

/**
 * Add to element fullscreen change event handler
 * @todo: make single handler support, if one is set other should be skiped.
 */
export const addFullscreenChangeListener = element => handler => {
  element.addEventListener('fullscreenchange', handler);
  element.addEventListener('webkitfullscreenchange', handler);
  element.addEventListener('mozfullscreenchange', handler);
  element.addEventListener('webkitendfullscreen', handler);
};

/**
 * Remove from element fullscreen change event handler
 * @todo: make single handler support, if one is set other should be skiped.
 */
export const removeFullscreenChangeListener = element => handler => {
  element.removeEventListener('fullscreenchange', handler);
  element.removeEventListener('webkitfullscreenchange', handler);
  element.removeEventListener('mozfullscreenchange', handler);
  element.removeEventListener('webkitendfullscreen', handler);
};

/**
 * Is fullscreen mode enabled.
 */
export const isFullscreen = fullscreenElement;

export default {
  fullscreenElement, requestFullscreen, cancelFullscreen,
  addFullscreenChangeListener, removeFullscreenChangeListener
}