const element = document.querySelector(".animation-element");
const observer = new IntersectionObserver((entries) => {
  element.classList.toggle("in-view", entries[0].isIntersecting);
});

observer.observe(element);

const logo = document.querySelector(".Gloutir");

function addJello() {
  logo.classList.add("mousedown-jello");
}

function removeJello() {
  logo.classList.remove("mousedown-jello");
}

logo.addEventListener("mouseover", addJello);

logo.addEventListener("animationend", removeJello);
