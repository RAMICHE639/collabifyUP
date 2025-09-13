"use strict";

var lightMode = localStorage.getItem("lightmode");

const customToggle = document.querySelectorAll(".custom-toggle input");

let switchStatus = false;

customToggle.forEach(curr => {
    curr.addEventListener("change", function () {
        if (this.checked) {
            switchStatus = this.checked;
            document.querySelector("body").classList.add("active");
            localStorage.setItem("lightMode", 0);
        } else {
            switchStatus = this.checked;
            document.querySelector("body").classList.remove("active");
            localStorage.setItem("lightMode", 1);
        }
    });
})
// customToggle.addEventListener("change", function () {
//   if (this.checked) {
//     switchStatus = this.checked;
//     document.querySelector("body").classList.add("active");
//     localStorage.setItem("lightMode", 0);
//   } else {
//     switchStatus = this.checked;
//     document.querySelector("body").classList.remove("active");
//     localStorage.setItem("lightMode", 1);
//   }
// });

// if (localStorage.getItem("lightMode") === 0) {
//   // document.querySelector("body").classList.add("active");
//   customToggle.checked = true;
// } else {
//   customToggle.checked = true;
//   // document.querySelector("body").classList.remove("active");
// }

const openNav = document.querySelector(".open-nav");
const overlayA = document.querySelectorAll(".menu-close-items");

openNav.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".mobile-nav").classList.toggle("active");
  document.querySelector("body").classList.toggle("no-scroll");
});

overlayA.forEach(function (curr) {
  curr.addEventListener("click", function () {
    document.querySelector(".mobile-nav").classList.toggle("active");
    document.querySelector(".open-nav").classList.toggle("active");
    document.querySelector("body").classList.remove("no-scroll");
  });
});

const bannerTitle = document.querySelector(".banner-col h1");
const bannerText = document.querySelector(".banner-col p");
const bannerBtn = document.querySelector(".banner-col .banner-col-btn");
const inkyyEmp = document.querySelectorAll(".inkyy-employee__all");

let bannerTl = gsap.timeline();

bannerTl
  .from(bannerTitle, {
    y: 35,
    opacity: 0,
    duration: 1,
  })
  .from(
    bannerText,
    {
      y: 35,
      opacity: 0,
      duration: 1,
    },
    "-=.5"
  )
  .from(
    bannerBtn,
    {
      y: 35,
      opacity: 0,
      duration: 1,
    },
    "-=.5"
  )
  .from(
    inkyyEmp,
    {
      transform: "scale(0)",
    },
    "-=.8"
  );

$(".heading-anim").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top 80%",
      //   markers: true,
    },
  });
  tl.from(targetElement, {
    transform: "skew(0deg, -5deg)",
    duration: 1,
    opacity: 0,
  });
});

$(".text-all-anim").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top 80%",
      // markers: true,
    },
  });
  tl.from(targetElement, {
    transform: "translateY(25px)",
    duration: 0.5,
    opacity: 0,
  });
});

$(".img-scale").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top 80%",
      // markers: true,
    },
  });
  tl.from(targetElement, {
    transform: "scale(.6)",
    duration: 0.5,
    opacity: 0,
  });
});
