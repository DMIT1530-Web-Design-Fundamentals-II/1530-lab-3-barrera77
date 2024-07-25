document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const esportsMenu = document.querySelector(".esports-menu");
  const dropdownItems = document.querySelectorAll(".dropdownitem");

  menuIcon.addEventListener("click", () => {
    esportsMenu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      dropdownItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !menuIcon.contains(event.target) &&
      !esportsMenu.contains(event.target)
    ) {
      esportsMenu.classList.remove("active");
      menuIcon.classList.remove("active");
    }
  });
});
