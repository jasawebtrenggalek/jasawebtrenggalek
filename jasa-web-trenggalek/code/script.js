// --------------- header ---------------
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
  let scrollDariAtas = window.scrollY;// sama juga dgn pageYOffset
  sections.forEach(sct => {
    const tinggiElement = sct.offsetHeight;
    const atasDariInduk = sct.offsetTop - 80;//sesuaikan dg tinggi header
    sectionId = sct.getAttribute("id");
    if (scrollDariAtas > atasDariInduk && scrollDariAtas <= atasDariInduk + tinggiElement) {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("aktif");
    }
    else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("aktif");
    }
  });
});

// --------------- navbar ---------------
const openNavbar = document.querySelector('.open-navbar');
const navbar = document.querySelector('.navbar');
openNavbar.addEventListener('click', ()=> {
  navbar.classList.toggle('aktif');
});

// --------------- galeri ---------------
var swiper = new Swiper(".galeri-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

// --------------- footer credit ---------------
let date = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = date;

//--------------- for All ---------------
const forbiddenKeys = ['c', 'u', 's', 'p'];
const forbiddenKeyCodes = [123, 73, 74];

document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

document.addEventListener("keydown", e => {
	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
		e.stopPropagation();
		e.preventDefault();
	};
});