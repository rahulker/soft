//navbar
$("#mobile-button").click(function () {
  if ($("#mobile-menu").hasClass("active")) {
    $("#mobile-menu").removeClass("active");
    $("body").removeClass("overflow_body");
  } else {
    $("nav").toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    $("body").toggleClass("overflow_body");
  }
});
function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
//swiper 2
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  },
});

//accodination

document.addEventListener("DOMContentLoaded", function () {
  var accTitles = document.querySelectorAll(".acc_title");
  accTitles.forEach(function (title) {
    title.addEventListener("click", function (event) {
      var dropDown = this.closest(".acc_card").querySelector(".acc_panel");
      var allPanels = this.closest(".accordination-container").querySelectorAll(
        ".acc_panel"
      );

      allPanels.forEach(function (panel) {
        if (panel !== dropDown) {
          panel.style.display = "none";
        }
      });

      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        var activeTitle = this.closest(
          ".accordination-container"
        ).querySelector(".acc_title.active");
        if (activeTitle) {
          activeTitle.classList.remove("active");
        }
      }

      if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
      } else {
        dropDown.style.display = "block";
      }

      event.preventDefault();
    });
  });
  // var angleUp = document.querySelectorAll("down-indetator");
  // angleUp.forEach(function (icon) {
  //   icon.addEventListener("click", function (IconEven) {
  //     IconEven.classList.toggle("fa-angle-down");
  //   });
  // });
});
