
document.querySelectorAll(".accordion-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "✅ Thanks! We'll get back to you soon.";
  e.target.reset();
});
