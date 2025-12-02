// Simple interaction for skills (tags)

const tags = document.querySelectorAll(".tag");

// Colors to switch between when you click
const gradientColors = [
  "linear-gradient(135deg, #6366f1, #ec4899)",
  "linear-gradient(135deg, #22c55e, #0ea5e9)",
  "linear-gradient(135deg, #f97316, #e11d48)"
];

tags.forEach(tag => {
  let colorIndex = 0;

  tag.addEventListener("click", () => {
    // Toggle active glow class
    tag.classList.add("active");

    // Change background gradient each click
    colorIndex = (colorIndex + 1) % gradientColors.length;
    tag.style.backgroundImage = gradientColors[colorIndex];

    // Optional: little “bounce” reset after animation
    setTimeout(() => {
      tag.style.transform = "translateY(-2px) scale(1.03)";
    }, 150);
  });
});

console.log("Portfolio Website Loaded with skill animations!");
