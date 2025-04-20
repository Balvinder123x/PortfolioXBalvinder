// script.js
window.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  if (!projects.length) {
    console.error("No .project elements found!");
    return;
  }

  projects.forEach((project) => {
    const ripple = document.querySelector(`.ripple[data-for="${project.id}"]`);
    if (!ripple) {
      console.error(`No ripple for ${project.id}`);
      return;
    }

    project.addEventListener("mouseenter", () => {
      const rect = project.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      ripple.style.setProperty("--cx", `${cx}px`);
      ripple.style.setProperty("--cy", `${cy}px`);
      ripple.classList.add("active");
    });

    project.addEventListener("mouseleave", () => {
      ripple.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enterButton");
  if (enterButton) {
    enterButton.addEventListener("click", () => {
      const landing = document.getElementById("landing");
      landing.classList.add("fade-out");
      // Allow the fade-out transition to complete before navigating
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000); // Duration matches the CSS transition duration
    });
  }
});
// home.js or script.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 1000); // match with transition time
    });
  });
});

document.getElementById("farmer_box2").addEventListener("click", function () {
  window.open(
    "https://www.figma.com/proto/nSuYaniCtOwzSrXOK8K54r/FARM-GENIE?node-id=210-2&p=f&t=2FNNvaoCn0K2qaHq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=210%3A2"
  );
});
document.getElementById("box2").addEventListener("click", function () {
  window.open("ar.html", "_self");
});
document.getElementById("box1").addEventListener("click", function () {
  window.open("getPoster.html", "_self");
});
document.getElementById("boxt").addEventListener("click", function () {
  window.open("tiptrack.html", "_self");
});

// Add to script.js
let isDragging = false;
let startX = 0;
let currentX = 0;
const swipeElement = document.querySelector(".swipe-handle");
const body = document.body;

// Touch events
swipeElement.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

swipeElement.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  handleMove(currentX - startX);
});

swipeElement.addEventListener("touchend", handleEnd);

// Mouse events
swipeElement.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  currentX = e.clientX;
  handleMove(currentX - startX);
});

document.addEventListener("mouseup", handleEnd);

function handleMove(offset) {
  const maxOffset = 150;
  const clampedOffset = Math.max(-maxOffset, Math.min(offset, maxOffset));
  swipeElement.style.transform = `translateX(${clampedOffset}px)`;
}

function handleEnd() {
  isDragging = false;
  const finalOffset =
    parseInt(
      swipeElement.style.transform.replace("translateX(", "").replace("px)", "")
    ) || 0;

  if (Math.abs(finalOffset) > 100) {
    body.classList.toggle("dark-mode");
  }

  swipeElement.style.transform = "translateX(0)";
}

// Add RGB color variable for decorations
document.documentElement.style.setProperty("--text-color-rgb", "0,0,0");
document.addEventListener("DOMContentLoaded", () => {
  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );
  const rgb = textColor.includes("rgb")
    ? textColor.match(/\d+/g).slice(0, 3).join(",")
    : "255,255,255";
  document.documentElement.style.setProperty("--text-color-rgb", rgb);
});
