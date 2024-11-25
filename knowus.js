function showContents(activeTab, contentsId){
    var tabs= document.querySelectorAll('.hbtn');
    var contents = document.querySelectorAll('.contents');
    var i=0;
    while(i < tabs.length){
      tabs[i].classList.remove('show');
      contents[i].classList.remove('show');
      i++;
    }
    activeTab.classList.add('show');
    document.getElementById(contentsId).classList.add('show');
  }
  

  const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every .scroller on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within .scroller-inner
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the .scroller-inner
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
/**
     * Preloader
     */
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}



/*Corosol */
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll(".item");
    let thumbnailItems = document.querySelectorAll(".thumbnail .item");
  
    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add("next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add("prev");
    }
  
    slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      ); // Remove the event listener after it's triggered once
    }

    
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators li');

// Function to move the carousel
function moveCarousel(direction) {
    // Remove 'active' class from current item and indicator
    items[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    // Update index based on direction (forward or backward)
    currentIndex = (currentIndex + direction + items.length) % items.length;

    // Add 'active' class to the new item and indicator
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

// Function to go to a specific slide
function goToSlide(index) {
    // Remove 'active' class from current item and indicator
    items[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    // Set the new index
    currentIndex = index;

    // Add 'active' class to the new item and indicator
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

// Automatically move the carousel every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change slide every 5 seconds

// Initialize the carousel by making the first item active
items[currentIndex].classList.add('active');
indicators[currentIndex].classList.add('active');

