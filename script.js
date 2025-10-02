// Load saved score or start at 0
let count = localStorage.getItem("score") || 0;
document.getElementById("counter").innerText = count;

let progress = parseInt(localStorage.getItem("itemProgress")) || 0;

function increase() {
  count++;
  document.getElementById("counter").innerText = count;
  localStorage.setItem("score", count);

  if (progress < 100) {
    progress += 1; // Increase by 10% per click
    updateProgress(progress);
  }

  // Save every click
}

const progressBar = document.getElementById("progressBar");
const tooltip = document.getElementById("progresstooltip");
const container = document.getElementById("progressContainer");

// Update the bar and tooltip
function updateProgress(value) {
  progressBar.style.width = value + "%";
  tooltip.textContent = value + "%";
  localStorage.setItem("itemProgress", value);
}

updateProgress(progress);

function updateCount() {
  document.getElementById("counter").innerText = count;
}

function runCommand() {
  const input = document
    .getElementById("command-input")
    .value.trim()
    .toLowerCase();

  switch (input) {
    case "resetall":
      resetAll();
      break;

    case "resetclicks":
      resetClicks();
      break;
    case "resetprogress":
      resetProgress();
      break;
    default:
      alert("Unkown command: " + input);
  }
}

document.getElementById("command-input").value = "";

function resetAll() {
  resetClicks();
  resetProgress();
}

function resetClicks() {
  count = 0;
  updateCount();
}

function resetProgress() {
  progress = 0;
  updateProgress(progress);
}
