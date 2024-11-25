


var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() 
}

resetTimeAnimation()



$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})


gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );


  var myButton = document.getElementById("totop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// var header = document.getElementById("nav-bar");
// var lists = header.getElementsByClassName("navtabs");
// for (var i = 0; i < lists.length; i++) {
//   lists[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// // Select all navigation tabs
// const navTabs = document.querySelectorAll('.navtabs');

// // Add a click event listener to each tab
// navTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove the active class from all tabs
//         navTabs.forEach(t => t.classList.remove('active'));
//         // Add the active class to the clicked tab
//         tab.classList.add('active');
//     });
// });

// navTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         navTabs.forEach(t => t.classList.remove('active'));
//         tab.classList.add('active');
//         // Store the active tab's href in localStorage
//         localStorage.setItem('activeTab', tab.href);
//     });
// });

// // On page load, set the active tab based on localStorage
// const activeTab = localStorage.getItem('activeTab');
// if (activeTab) {
//     navTabs.forEach(tab => {
//         if (tab.href === activeTab) {
//             tab.classList.add('active');
//         }
//     });
// }

// Select all navigation links with the class 'navtabs'
// const navTabs = document.querySelectorAll('.navtabs');

// // Add click event to each tab
// navTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove 'active' from all tabs
//         navTabs.forEach(t => t.classList.remove('active'));
//         // Add 'active' to clicked tab
//         tab.classList.add('active');
//         // Save active tab href to localStorage
//         localStorage.setItem('activeTab', tab.href);
//     });
// });

// // On page load, set active tab from localStorage
// const activeTab = localStorage.getItem('activeTab');
// if (activeTab) {
//     navTabs.forEach(tab => {
//         if (tab.href === activeTab) {
//             tab.classList.add('active');
//         }
//     });
// }


// // Select all navigation tabs
// const navTabs = document.querySelectorAll('.navtabs');

// // Get the current path, accounting for default pages
// const currentPath = window.location.pathname === '/' ? '/Home.html' : window.location.pathname;

// // Loop through each nav tab
// navTabs.forEach(tab => {
//     // Compare the href attribute to the current path
//     if (tab.getAttribute('href') === currentPath) {
//         tab.classList.add('active'); // Add the active class
//     } else {
//         tab.classList.remove('active'); // Ensure others are not active
//     }
// });



const complianceLink = document.getElementById('compliance-link');
const complianceModal = document.getElementById('compliance-modal');
const closeModal = document.getElementById('close-modal');

complianceLink.addEventListener('click', () => {
    complianceModal.classList.add('active'); 
});


closeModal.addEventListener('click', () => {
    complianceModal.classList.remove('active'); 
});


window.addEventListener('click', (e) => {
    if (e.target === complianceModal) {
        complianceModal.classList.remove('active');
    }
});



const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})