document.addEventListener('DOMContentLoaded', function() {
    const speedRange = document.getElementById('speedRange');
    const speedValue = document.getElementById('speedValue');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
  
    speedRange.addEventListener('input', function() {
      speedValue.textContent = this.value;
    });
  
    startButton.addEventListener('click', function() {
      const speed = parseInt(speedRange.value);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "start", speed: speed });
      });
    });
  
    stopButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
      });
    });
  });
  