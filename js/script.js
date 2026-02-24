function scroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const backToTopButton = document.querySelector("#back-to-top");
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("hide", window.scrollY <= 150);
  });
}

const backgroundLink = document.querySelector("#background-link");
if (backgroundLink) {
  backgroundLink.addEventListener("click", scroll);
}

const skillsLink = document.querySelector("#skills-link");
if (skillsLink) {
  skillsLink.addEventListener("click", scroll);
}

const contactLink = document.querySelector("#contact-link");
if (contactLink) {
  contactLink.addEventListener("click", scroll);
}

const backToTop = document.querySelector("#back-to-top");
if (backToTop) {
  backToTop.addEventListener("click", scrollToTop);
}
