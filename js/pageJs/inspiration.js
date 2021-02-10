function mobileOnlySlider() {
  $(".inspiration__inner-row").slick({
    dots: false,
    infinite: true,
    arrows: false,
    lazyLoad: "ondemand",
    speed: 300,
    settings: "unslick",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 650) {
  mobileOnlySlider();
}
$(window).resize(function (e) {
  if (window.innerWidth < 650) {
    if (!$(".inspiration__inner-row").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    if ($(".inspiration__inner-row").hasClass("slick-initialized")) {
      $(".inspiration__inner-row").slick("unslick");
    }
  }
});
function exploMaker() {
  document.getElementById("exploMaker").classList.toggle("showChat");
  document.getElementById("voyaGeurs").classList.remove("showChat");
}
function voyaGeurs() {
  document.getElementById("voyaGeurs").classList.toggle("showChat");
  document.getElementById("exploMaker").classList.remove("showChat");
}
$(".categorySlider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  lazyLoad: "ondemand",
  speed: 300,
  settings: "unslick",
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
      },
    },
    {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
        },
      },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
