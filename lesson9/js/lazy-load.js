let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 60px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
        // console.log('testing')
    };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    }); 
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
        console.log('what does this do?')
    }); 
}