// cursor animation
let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");
let buttons = document.querySelectorAll("button");

let cursor = (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};

window.addEventListener("mousemove", cursor);

// cursor over anchor tags
links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

// cursor over buttons
buttons.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

//welcome wrapper animation
document.addEventListener("DOMContentLoaded", () => {
  // wrapper animation
  anime
    .timeline({
      targets: ".welcome-animation-wrapper",
      easing: "easeOutExpo",
    })
    .add({
      delay: 8000,
      translateY: ["0px", "-30px"],
      opacity: 0,
      duration: 2000,
      complete: function (anime) {
        document.querySelector(".welcome-animation-wrapper").remove();
      },
    });

  //heading animation
  anime({
    targets: ".hero-heading",
    delay: 10000,
    opacity: 1,
    duration: 2000,
    translateY: ["-30px", "0px"],
    easing: "easeOutExpo",
  });

  //sub-heading animation
  anime({
    targets: ".hero-text",
    delay: 11000,
    opacity: 1,
    duration: 2000,
    translateY: ["-30px", "0px"],
    easing: "easeOutExpo",
  });

  //call-to-action animation
  anime({
    targets: ".call-to-action",
    delay: 12000,
    opacity: 1,
    duration: 2000,
    translateY: ["-30px", "0px"],
    easing: "easeOutExpo",
  });

  //header and divider animation
  anime({
    targets: [".header", ".divider"],
    delay: 13000,
    opacity: 1,
    duration: 2000,
    // translateY: ["30px", "0px"],
    easing: "easeOutExpo",
  });

  //stars background animation
  anime({
    targets: [".stars-background"],
    delay: 14000,
    opacity: 0.5,
    duration: 2000,
    // translateY: ["-30px", "0px"],
    easing: "easeOutExpo",
  });

  //rest of the body animation
  anime({
    targets: [".services-section", ".process-section", ".contact-section"],
    delay: 14000,
    opacity: 1,
    duration: 4000,
    // translateY: ["30px", "0px"],
    easing: "easeOutExpo",
  });

  //   hiding main wrapper on loading
  document.querySelector(".main-wrapper").style.display = "none";
  document.querySelector(".cursor").style.display = "none";
});

// bringing the main wrapper back
setTimeout(() => {
  document.querySelector(".main-wrapper").style.display = "block";
  document.querySelector(".cursor").style.display = "block";
}, 8000);

// stars background parallax effect
let stars = document.querySelector(".stars-background");
window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  stars.style.top = scrollValue * 0.75 + "px";
});

//popup on click
let toggle = () => {
  let mainWrapper = document.querySelector(".main-wrapper");
  mainWrapper.classList.toggle("btn-active");
  let popup = document.querySelector(".notification-popup");
  popup.classList.toggle("btn-active");
};

//copying the email to clipboard
const email = "adityagera.04@gmail.com";

let copyEmail = () => {
  navigator.clipboard.writeText(email);
};
