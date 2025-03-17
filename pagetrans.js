document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Stop instant navigation
    const destination = this.href; // Get link destination

    const content = document.querySelector(".content");
    if (content) {
      content.classList.add("fade-out");

      // Wait for the CSS animation to finish before navigating
      content.addEventListener(
        "animationend",
        () => {
          window.location.href = destination;
        },
        { once: true }
      ); // Ensures the event listener runs only once
    } else {
      console.warn(
        "Warning: .content element not found, navigating immediately."
      );
      window.location.href = destination; // Navigate instantly if content is missing
    }
  });
});
