const pictures = document.querySelectorAll('.card-img');


    const images = document.querySelectorAll('[data-src]');
    const sources = document.querySelectorAll('[data-srcset]')

   

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

function preloadSource(source) {
    const srcset = source.getAttribute("data-srcset");
    if (!srcset){
        return;
    }
    source.srcset = srcset;
    source.removeAttribute('data-srcset')
}

const picOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
          if (item.isIntersecting) {
            preloadImage(item.target);
            preloadSource(item.target);
            observer.unobserve(item.target);
          }
      });
  }, picOptions);
  //loop through each img and check status and load if necessary
  images.forEach((img) => {
      observer.observe(img);
  });
  sources.forEach((img) => {
    observer.observe(img);
});
} else {
  //load all images if Intersection Observer not supported
  images.forEach((img) => {
      preloadImage(img);

  });
  sources.forEach(img=>{preloadSource(img)});
}

images.forEach((img) => {
  observer.observe(img);
});
sources.forEach((img) => {
observer.observe(img);
});

// const picObserver = new IntersectionObserver((entries, imgObserver) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       preloadPicture(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   })
// }, picOptions);

// pictures.forEach(picture => {
//   picObserver.observe(picture);
// })