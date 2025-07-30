(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // ########################## swiper ##########################

  new Swiper(".tickets-slide", {
    slidesPerView: "2",
    loop: true,
    speed: 5000,
    loopAdditionalSlides: 5,
    spaceBetween: 0,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1640: {
        slidesPerView: 6,
      },
      1340: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
    },
  });
})();

// table of contents

document.addEventListener("DOMContentLoaded", () => {
  const tableOfContentItems = document.querySelectorAll(
    ".table-of-content #TableOfContents a",
  );

  // Dynamically get sections based on href attributes
  const sections = Array.from(tableOfContentItems)
    .map((link) => {
      const sectionId = link.getAttribute("href").replace("#", "");
      return document.getElementById(sectionId);
    })
    .filter((section) => section);

  const updateActiveLink = () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 200) {
        currentSectionId = section.id;
      }
    });

    tableOfContentItems.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");

      if (href === currentSectionId) {
        link.style.textDecoration = "underline";
      } else {
        link.style.textDecoration = "none";
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("resize", updateActiveLink);

  updateActiveLink();
});

// solve nav responsive issue 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    document.querySelector("#nav-menu").classList.add("lg:!flex");
  }
});

// rotate svg icon on scroll
function rotateOnScroll() {
  const svgIcon = document.querySelector(".animate-logo-icon");

  if (window.scrollY > 0) {
    svgIcon.style.animation = "none";
    svgIcon.offsetHeight; // Triggers a reflow
    svgIcon.style.animation = "rotateOnLoad 1s forwards";
  }
}

window.addEventListener("scroll", rotateOnScroll);
