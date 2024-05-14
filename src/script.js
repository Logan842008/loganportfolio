$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
const button = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

navbar.style.transitionDuration = "0.5s";
button.style.transitionDuration = "0.5s";

button.addEventListener("click", () => {
  if (navbar.classList.contains("max-lg:right-[-100%]")) {
    navbar.classList.remove("max-lg:right-[-100%]");
    navbar.classList.remove("max-lg:hidden");
    button.classList.remove("ri-menu-line");
    button.classList.add("ri-close-large-line");
    navbar.classList.add("max-lg:right-[5%]");
  } else if (navbar.classList.contains("max-lg:right-[5%]")) {
    navbar.classList.remove("max-lg:right-[5%]");
    navbar.classList.add("max-lg:right-[-100%]");
    button.classList.add("ri-menu-line");
    navbar.classList.add("max-lg:hidden");
    button.classList.remove("ri-close-large-line");
  }
});
let sections = document.querySelectorAll("section,header");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 92;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("text-orange-500");
        links.classList.remove("font-bold");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("text-orange-500");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("font-bold");
      });
    }
  });
};
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Coder.";
  }, 0);
  setTimeout(() => {
    text.textContent = "Developer.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Student.";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

prev.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});
