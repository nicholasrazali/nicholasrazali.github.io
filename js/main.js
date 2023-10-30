// Sticky Navigation Menu
(() => {
  let nav = document.querySelector("nav");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
})();

// Side Navigation Menu
(() => {
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");

  menuBtn.addEventListener("click", () => {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
  });

  cancelBtn.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
  });

  // Side Navigation Bar Close
  let navLinks = document.querySelectorAll(".menu li a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
    });
  }
})();

// navigation menu
(() => {
  const navigation = document.querySelector(".navigation");
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("link-item")) {
      if (event.target.hash !== "") {
        event.preventDefault();
        const hash = event.target.hash;
        navigation
          .querySelector(".active")
          .classList.add("outer-shadow", "hover-in-shadow");
        navigation
          .querySelector(".active")
          .classList.remove("active", "inner-shadow");
        event.target.classList.add("active", "inner-shadow");
        event.target.classList.remove("outer-shadow", "hover-in-shadow");
        let navItems = navigation.querySelectorAll(".link-item");
        navItems.forEach((item) => {
          if (hash === item.hash) {
            navBar.classList.remove("active");
            menuBtn.style.opacity = "1";
            menuBtn.style.pointerEvents = "auto";
            body.style.overflowX = "auto";
            item.classList.add("active", "inner-shadow");
            item.classList.remove("outer-shadow", "hover-in-shadow");
          }
        });
        window.location.hash = hash;
      }
    }
  });
})();

//Server Time
function showTime() {
  var a_p = "";
  var today = new Date();
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();

  var date = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var curr_day = date.getDate();
  var month = date.getMonth();
  var curr_year = date.getFullYear();

  curr_hour = checkTime(curr_hour);
  curr_minute = checkTime(curr_minute);
  curr_second = checkTime(curr_second);

  document.getElementById("clock").innerHTML =
    curr_hour + " : " + curr_minute + " : " + curr_second + " " + a_p;

  document.getElementById("date").innerHTML =
    curr_day + " " + months[month] + " " + curr_year + " " + a_p;

  document.getElementById("copyright").innerHTML = curr_year;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(showTime, 500);

(() => {
  var typed = new Typed(".typing", {
    strings: [
      '<i class="fas fa-graduation-cap"></i> Computer Science and Statistics Fresh Graduate',
      '<i class="fas fa-chart-line"></i> Data Analyst',
    ],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });
})();

// about section tab switch start
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    // if event target contains 'tabs-item' class and not contains 'active-class'
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      // deactive exiting active 'tab-item'
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("active", "outer-shadow");
      // deactivate exiting active 'tab-content'
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      // activate new tab content
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();
// about section tab switch end

function bodyScrollingToggle() {
  document.body.classList.toggle("hidden-scrolling");
}

// project filter
(() => {
  const filterContainer = document.querySelector(".project-filter"),
    certificateItemsContainer = document.querySelector(".project-items"),
    certificateItems = document.querySelectorAll(".project-item"),
    popup = document.querySelector(".project-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
  let itemIndex, slideIndex, screenshots;

  // filter certificate items
  filterContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      // deactivate existing active 'filter-item'
      filterContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      // active existing active 'filter-item'
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      certificateItems.forEach((item) => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });

  certificateItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".project-item-inner")) {
      const certificateItem = event.target.closest(
        ".project-item-inner"
      ).parentElement;
      //get the certificateItem index
      itemIndex = Array.from(certificateItem.parentElement.children).indexOf(
        certificateItem
      );
      screenshots = certificateItems[itemIndex]
        .querySelector(".project-item-img img")
        .getAttribute("data-screenshots");
      // convert screenshot into array
      screenshots = screenshots.split(",");
      if (screenshots.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      slideIndex = 0;
      popupToggle();
      popupSlideshow();
      popupDetails();
    }
  });

  closeBtn.addEventListener("click", () => {
    popupToggle();
    if (projectDetailsContainer.classList.contains("active")) {
      popupDetailsToggle();
    }
  });

  function popupToggle() {
    popup.classList.toggle("open");
    bodyScrollingToggle();
  }

  function popupSlideshow() {
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    // activate the loader until the popupImg loaded
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      // deactivate loader after the popupImg loaded
      popup.querySelector(".pp-loader").classList.remove("active");
    };
    // popup.querySelector(".pp-counter").innerHTML =
    //   slideIndex + 1 + " of " + screenshots.length;
  }

  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    popupSlideshow();
    // console.log("slideIndex: "+ slideIndex);
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = screenshots.length - 1;
    } else {
      slideIndex--;
    }
    popupSlideshow();
  });

  function popupDetails() {
    // if-details not exists
    if (
      !certificateItems[itemIndex].querySelector(".project-item-details")
    ) {
      projectDetailsBtn.style.display = "none";
      return;
    }
    projectDetailsBtn.style.display = "block";
    // get the project details
    const details = certificateItems[itemIndex].querySelector(
      ".project-item-details"
    ).innerHTML;
    // set the project details
    popup.querySelector(".pp-project-details").innerHTML = details;
    // get the project title
    const title = certificateItems[itemIndex].querySelector(
      ".project-item-title"
    ).innerHTML;
    // set the project title
    popup.querySelector(".pp-title h2").innerHTML = title;
    // get the project category
    const category = certificateItems[itemIndex].getAttribute("data-category");
    // set the project category
    popup.querySelector(".pp-project-category").innerHTML = category
      .split("-")
      .join(" ");
  }

  projectDetailsBtn.addEventListener("click", () => {
    popupDetailsToggle();
  });

  function popupDetailsToggle() {
    if (projectDetailsContainer.classList.contains("active")) {
      projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsBtn.querySelector("i").classList.add("fa-plus");
      projectDetailsContainer.classList.remove("active");
      projectDetailsContainer.style.maxHeight = 0 + "px";
    } else {
      projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectDetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.classList.add("active");
      projectDetailsContainer.style.maxHeight =
        projectDetailsContainer.scrollHeight + "px";
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }
})();
// project filter end

// certificate filter and popup start
(() => {
  const filterContainer = document.querySelector(".certificate-filter"),
    certificateItemsContainer = document.querySelector(".certificate-items"),
    certificateItems = document.querySelectorAll(".certificate-item"),
    popup = document.querySelector(".certificate-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
  let itemIndex, slideIndex, screenshots;

  // filter certificate items
  filterContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      // deactivate existing active 'filter-item'
      filterContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      // active existing active 'filter-item'
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      certificateItems.forEach((item) => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });

  certificateItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".certificate-item-inner")) {
      const certificateItem = event.target.closest(
        ".certificate-item-inner"
      ).parentElement;
      //get the certificateItem index
      itemIndex = Array.from(certificateItem.parentElement.children).indexOf(
        certificateItem
      );
      screenshots = certificateItems[itemIndex]
        .querySelector(".certificate-item-img img")
        .getAttribute("data-screenshots");
      // convert screenshot into array
      screenshots = screenshots.split(",");
      if (screenshots.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      slideIndex = 0;
      popupToggle();
      popupSlideshow();
      popupDetails();
    }
  });

  closeBtn.addEventListener("click", () => {
    popupToggle();
    if (projectDetailsContainer.classList.contains("active")) {
      popupDetailsToggle();
    }
  });

  function popupToggle() {
    popup.classList.toggle("open");
    bodyScrollingToggle();
  }

  function popupSlideshow() {
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    // activate the loader until the popupImg loaded
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      // deactivate loader after the popupImg loaded
      popup.querySelector(".pp-loader").classList.remove("active");
    };
    // popup.querySelector(".pp-counter").innerHTML =
    //   slideIndex + 1 + " of " + screenshots.length;
  }

  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    popupSlideshow();
    // console.log("slideIndex: "+ slideIndex);
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = screenshots.length - 1;
    } else {
      slideIndex--;
    }
    popupSlideshow();
  });

  function popupDetails() {
    // if-details not exists
    if (
      !certificateItems[itemIndex].querySelector(".certificate-item-details")
    ) {
      projectDetailsBtn.style.display = "none";
      return;
    }
    projectDetailsBtn.style.display = "block";
    // get the project details
    const details = certificateItems[itemIndex].querySelector(
      ".certificate-item-details"
    ).innerHTML;
    // set the project details
    popup.querySelector(".pp-project-details").innerHTML = details;
    // get the project title
    const title = certificateItems[itemIndex].querySelector(
      ".certificate-item-title"
    ).innerHTML;
    // set the project title
    popup.querySelector(".pp-title h2").innerHTML = title;
    // get the project category
    const category = certificateItems[itemIndex].getAttribute("data-category");
    // set the project category
    popup.querySelector(".pp-project-category").innerHTML = category
      .split("-")
      .join(" ");
  }

  projectDetailsBtn.addEventListener("click", () => {
    popupDetailsToggle();
  });

  function popupDetailsToggle() {
    if (projectDetailsContainer.classList.contains("active")) {
      projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsBtn.querySelector("i").classList.add("fa-plus");
      projectDetailsContainer.classList.remove("active");
      projectDetailsContainer.style.maxHeight = 0 + "px";
    } else {
      projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectDetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.classList.add("active");
      projectDetailsContainer.style.maxHeight =
        projectDetailsContainer.scrollHeight + "px";
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }
})();
// certificate filter and popup end


window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 600);
});
