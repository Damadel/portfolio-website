// Skill tags color animation
const tags = document.querySelectorAll(".tag");

const gradientColors = [
  "linear-gradient(135deg, #6366f1, #ec4899)",
  "linear-gradient(135deg, #22c55e, #0ea5e9)",
  "linear-gradient(135deg, #f97316, #e11d48)",
];

tags.forEach((tag) => {
  let colorIndex = 0;

  tag.addEventListener("click", () => {
    tag.classList.add("active");
    colorIndex = (colorIndex + 1) % gradientColors.length;
    tag.style.backgroundImage = gradientColors[colorIndex];
  });
});

console.log("Portfolio Website Loaded with skill animations!");
