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

document.addEventListener("click", (e) => {
  const sliderArrow = e.target.closest(".slider-arrow");
  // console.log(sliderArrow);
  if (sliderArrow != null) moveSlider(sliderArrow);
});

function moveSlider(sliderArrow) {
  const slider = sliderArrow
    .closest(".section3-imgbox")
    .querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (sliderArrow.classList.contains("left-arrow-button")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
  if (sliderArrow.classList.contains("right-arrow-button")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
}
