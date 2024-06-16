document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleButton");

  // ตรวจสอบสถานะปัจจุบันของ document.designMode
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: getDesignModeStatus,
      },
      (results) => {
        if (results && results[0]) {
          updateButton(results[0].result);
        }
      }
    );
  });

  // เมื่อปุ่มถูกคลิก
  button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: toggleDesignMode,
        },
        (results) => {
          if (results && results[0]) {
            updateButton(results[0].result);
          }
        }
      );
    });
  });

  function updateButton(isOn) {
    if (isOn) {
      button.textContent = "Turn Off";
      button.className = "on";
    } else {
      button.textContent = "Turn On";
      button.className = "off";
    }
  }
});

function toggleDesignMode() {
  if (document.designMode === "off") {
    document.designMode = "on";
  } else {
    document.designMode = "off";
  }
  return document.designMode === "on";
}

function getDesignModeStatus() {
  return document.designMode === "on";
}
