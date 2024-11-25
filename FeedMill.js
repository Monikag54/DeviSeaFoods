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