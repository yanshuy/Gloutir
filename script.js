const element = document.querySelector(".animation-element");
// const donutBounce = document.querySelector(".donutBounce");
const observer = new IntersectionObserver((entries) => {
  element.classList.toggle("in-view", entries[0].isIntersecting);
});

const observer2 = new IntersectionObserver((entries) => {
  element.classList.toggle("donutBounce", entries[0].isIntersecting);
  const donutBounce = document.querySelector(".donutBounce");
  donutBounce.animate(
    [
      {
        transform: "translate3d(0, -1000px, 0) scaleX(1.3)",
        offset: 0,
        opacity: 1,
      },

      {
        transform: "translate3d(0, 0px, 0) scaleX(1)",
        offset: 0.33,
      },

      {
        transform: "translate3d(0, -90px, 0) scaleX(0.92)",
        offset: 0.5,
      },

      {
        transform: "translate3d(0, 0px, 0) scaleX(1)",
        offset: 0.666,
      },

      {
        transform: "translate3d(0, -30px, 0) scaleX(0.96)",
        offset: 0.8333,
      },

      {
        transform: "translate3d(0, 0px, 0) scaleX(1)",
        offset: 1,
        opacity: 1,
      },
    ],
    {
      easing: "ease-in",
      duration: 1250,
      fill: "none",
    }
  );
  element.classList.remove("donutBounce");
  observer2.unobserve(element);
});

observer.observe(element);
observer2.observe(element);

const logo = document.querySelector(".Gloutir");

function addJello() {
  logo.classList.add("mousedown-jello");
}

function removeJello() {
  logo.classList.remove("mousedown-jello");
}

logo.addEventListener("mouseover", addJello);

logo.addEventListener("animationend", removeJello);

//slider
document.addEventListener("click", (e) => {
  const sliderArrow = e.target.closest(".slider-arrow");
  if (sliderArrow != null) moveSlider(sliderArrow);
});

function moveSlider(sliderArrow) {
  const slider = sliderArrow
    .closest(".section3-imgbox")
    .querySelector(".slider");
  const sliderLength = slider.children.length;
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (sliderArrow.classList.contains("right-arrow-button")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
    if (sliderIndex >= sliderLength - 1) {
      slider.style.setProperty("--slider-index", 0);
    }
  }
  if (sliderArrow.classList.contains("left-arrow-button")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
    if (sliderIndex - 1 < 0) {
      slider.style.setProperty("--slider-index", 6);
    }
  }
}

const openModal = document.getElementById("big-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
