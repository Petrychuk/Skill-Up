

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  console.log("Slides:", slides);

  let currentIndex = 0;

  function changeSlide() {
    slides[currentIndex].classList.remove("shown");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("shown");
    setTimeout(changeSlide, 7000);
  }

  changeSlide();
});

  
  


