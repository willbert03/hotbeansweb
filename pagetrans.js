document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent immediate navigation
    const destination = this.href; // Get href from the <a> element

    document.querySelector(".content").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = destination; // Navigate after fade-out
    }, 500); // Match animation duration
  });
});
