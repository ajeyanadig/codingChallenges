"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const sections = document.querySelectorAll(".section");
const navContainer = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__link");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const imgTargets = document.querySelectorAll("img[data-src]");

//MODAL LOGIC START
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((curr) => curr.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//MODAL LOGIC END
document.querySelector(".btn--scroll-to").addEventListener("click", (e) => {
  sections[0].scrollIntoView({ behavior: "smooth" });
});
//Page Navigation- Event Delegation -- Use Event Propagation
//Smooth scrolling - .scrollIntoView({optionsObj})
navContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "nav__link") {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});
//Tabbed Component - Operations of Bank(webapp)- Event Delegation
tabsContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("operations__tab")) return;
  let opContainer = e.target.closest(".operations");
  let tabNum = e.target.dataset.tab;
  //remove active classes
  tabs.forEach((curr) => curr.classList.remove("operations__tab--active"));
  tabsContent.forEach((curr) =>
    curr.classList.remove("operations__content--active")
  );

  //add current class
  e.target.classList.add("operations__tab--active");
  opContainer
    .querySelector(`.operations__content--${tabNum}`)
    .classList.add("operations__content--active");
});

//Hover effect for links, PASSING ARGS TO EVENT HANDLERS(use OOP)
//rather than wrapper function, passed in opacity in the this value with bind
function navLinkHoverHandler(e) {
  if (!e.target.classList.contains("nav__link")) return;
  navLinks.forEach((curr) => {
    if (curr != e.target) {
      curr.style.opacity = this;
    }
  });
  document.querySelector("#logo").style.opacity = this;
}
//rather than wrapper function, passed in opacity in the this value with bind
nav.addEventListener("mouseover", navLinkHoverHandler.bind(0.5));
nav.addEventListener("mouseout", navLinkHoverHandler.bind(1));

//Sticky Navigation using JS using IntersectionObserver API

const headerObserver = new IntersectionObserver(
  (entries, observedObj) => {
    //console.log(getComputedStyle(nav).height); it's 90 acc to .css file
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.classList.remove("sticky");
      } else {
        nav.classList.add("sticky");
      }
    });
  },
  { root: null, threshold: 0, rootMargin: "-90px" }
);
headerObserver.observe(header);

// REVEALING SECTIONS ON SCROLL- WAY TOO COOL
const allSections = document.querySelectorAll(".section");
function revealSection(entries, observerObj) {
  const [entry] = entries;
  if (entry.isIntersecting === true) {
    entry.target.classList.remove("section--hidden");
    //just so that it only runs ONCE
    observerObj.unobserve(entry.target);
  }
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
//in case JS is diabled in browser, this(section--hidden) can be avoided being put in the html file
allSections.forEach((curr) => {
  curr.classList.add("section--hidden");
  sectionObserver.observe(curr);
});

//LAZY LOADING

function loadImg(entries, observerObj) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry);
  entry.target.src = entry.target.dataset.src;
  // you can keep the classList.remove line without event listener
  //but the lazy image is loaded first, a little low quality but once loaded it's replaced asynchronously on its own
  //maybe better to have a blur->low quality img->HD
  //rather than blurred -> HD(takes more time)
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observerObj.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
imgTargets.forEach((curr) => imgObserver.observe(curr));
