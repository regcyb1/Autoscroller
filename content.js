let scrollIntervalId = null;

function startAutoScroll(speed) {
  stopAutoScroll(); // Stop any existing scrolling
  scrollIntervalId = setInterval(() => {
    window.scrollBy(0, speed);
  }, 100);
}

function stopAutoScroll() {
  clearInterval(scrollIntervalId);
}

// Start scrolling automatically when the content script is injected
startAutoScroll(10); // Adjust the speed as needed

// Stop auto-scrolling when the user manually scrolls
window.addEventListener('wheel', stopAutoScroll);
