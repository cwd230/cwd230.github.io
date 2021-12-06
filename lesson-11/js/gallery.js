const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
  img.removeAttribute("data-src");
}

const picOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px"
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        console.log(item.target);
        preloadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  }, picOptions);
  //loop through each img and check status and load if necessary
  images.forEach(img => {
    observer.observe(img);
  });
} else {
  //load all images if Intersection Observer not supported
  images.forEach(img => {
    preloadImage(img);
  });
}
