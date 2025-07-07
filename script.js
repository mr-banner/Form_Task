const boxes = document.querySelectorAll(".box");
const total = document.querySelector(".total");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      b.classList.remove("active");
      b.querySelector("input").checked = false;
      const dropdown = b.querySelector(".dropdowns");
      if (dropdown) dropdown.style.display = "none";
    });

    box.classList.add("active");
    box.querySelector("input").checked = true;

    const dropdown = box.querySelector(".dropdowns");
    if (dropdown) dropdown.style.display = "block";
    const priceText = box.querySelector(".price").innerText;
    total.innerText = `Total: ${priceText}`;
  });
});
document.querySelectorAll(".box").forEach((box) => {
  const dropdown = box.querySelector(".dropdowns");
  if (dropdown) {
    dropdown.style.display = box.classList.contains("active")
      ? "block"
      : "none";
  }
});
