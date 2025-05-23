const elementsToScroll = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("shown");
    }
  });
});

elementsToScroll.forEach((element) => observer.observe(element));
