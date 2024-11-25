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