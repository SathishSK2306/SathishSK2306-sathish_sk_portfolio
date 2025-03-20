const navLinks = document.querySelectorAll(".nav-bar .options a");
const menuIcon = document.querySelector("#menu-icon");
const sections = document.querySelectorAll("section");
const navBar = document.querySelector(".options");

// menu icon

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navBar.classList.toggle("active");
});

const activePage = () => {
  navLinks.forEach((link) => {
    const barsbox = document.querySelector(".bars-box");
    const nav = document.querySelector("nav");
    link.classList.remove("active");

    barsbox.classList.remove("active");
    setTimeout(() => {
      barsbox.classList.add("active");
    });

    nav.classList.remove("active");
    setTimeout(() => {
      nav.classList.add("active");
    });

    sections.forEach((section) => {
      section.classList.remove("active");

      menuIcon.classList.remove("fa-xmark");
      navBar.classList.remove("active");
    });
  });
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    // if (!link.classList.contains("active")) {
    activePage();
    link.classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1500);
    setTimeout(() => {
      sections[idx].classList.add("active");
    }, 100);
  });
});

// logoLink.addEventListener("click", () => {
//   if (navLinks[0].classList.contains("active")) {
//     activePage();

//     navLinks[0].classList.add("active");
//   }
// });

const identityBtns = document.querySelectorAll(".identity-btn");

identityBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const identityDetails = document.querySelectorAll(".identity-details");

    identityBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    identityDetails.forEach((details) => {
      details.classList.remove("active");
    });
    identityDetails[idx].classList.add("active");
  });
});

//image slide show

const arrowRight = document.querySelector(
  ".Projects-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".Projects-box .navigation .arrow-left"
);

let index = 0;

const activeProjects = () => {
  const imgSlide = document.querySelector(".img-carouse .img-slide");
  const projectDetails = document.querySelectorAll(".Projects-details");

  imgSlide.style.transform = `translateX(calc(-${index * 100}%
  ))`;

  projectDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  projectDetails[index].classList.add("active");
};
arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disblaed");
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }
  activeProjects();
});
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activeProjects();
});
