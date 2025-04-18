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


  