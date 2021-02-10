// notification
function showNotification() {
  document.getElementById("notification").classList.toggle("showNotification");
}
function hideNotification() {
  document.getElementById("notification").classList.remove("showNotification");
}
// main__slider end
// =====================================
$(".main__slider").slick({
  dots: false,
  arrows: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  infinite: true,
  speed: 1000,
  inline: true,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
});
// main__slider end
// =====================================
// period start
var myDate;
var picker = new Lightpick({
  field: document.getElementById("datepicker"),
  singleDate: false,
  numberOfMonts: 2,
  selectForward: true,
  footer: true,
  repick: true,
  autoclose: false,
  onOpen: function (start, end) {},
  onClose: function () {
    SetSeasonText(startDate);
  },
  onSelect: function (start, end) {
    var str = "";
    str += start ? start.format("Do MMMM YYYY") + " to " : "";
    str += end ? end.format("Do MMMM YYYY") : "...";
    document.getElementById("datepicker").innerHTML = str;
    startDate = start;
  },
});

function SetSeasonText(date) {
  var monthstats = [
    { from: "2020-01-01", to: "2020-02-15", status: "perfect" },
    { from: "2020-02-15", to: "2020-05-20", status: "notRecommended" },
    { from: "2020-09-10", to: "2020-12-31", status: "perfect" },
    { from: "2020-05-20", to: "2020-09-10", status: "good" },
  ];
  myDate = date;
  date.set("year", 2020);
  moment.defaultFormat = "YYYY-MM-DD";
  monthstats.forEach((e) => {
    if (date >= moment(e.from).toDate() && date < moment(e.to).toDate()) {
      var statusPerfect = "";
      var statusGood = "";
      var statusBad = "";

      if (e.status == "good") {
        console.log("good");
        statusGood = "";
        document.getElementById("perfectPeriod").classList.remove("showInfo");
        document.getElementById("badPeriod").classList.remove("showInfo");
        document.getElementById("goodPeriod").classList.add("showInfo");
        document.getElementById("calendarOuter").classList.remove("showInfo");
      } else if (e.status == "perfect") {
        statusPerfect = "";
        console.log("perfect");
        document.getElementById("perfectPeriod").classList.add("showInfo");
        document.getElementById("badPeriod").classList.remove("showInfo");
        document.getElementById("goodPeriod").classList.remove("showInfo");
        document.getElementById("calendarOuter").classList.remove("showInfo");
      } else if (e.status == "notRecommended") {
        statusBad = "";
        console.log("bad");
        document.getElementById("perfectPeriod").classList.remove("showInfo");
        document.getElementById("badPeriod").classList.add("showInfo");
        document.getElementById("goodPeriod").classList.remove("showInfo");
        document.getElementById("calendarOuter").classList.remove("showInfo");
        document.getElementById("periodBtn").classList.add("badBtn");
      }
    }
  });
}
// period end
// period mobile start
var startDate;
// mobile calendarion
var myDate;
var picker = new Lightpick({
  field: document.getElementById("datepickerMobile"),
  singleDate: false,
  selectForward: true,
  footer: true,
  disabledDatesInRange: false,
  inline: true,
  opens: true,
  autoclose: false,
  onOpen: function (start, end) {},
  onClose: function () {
    document.querySelector(".lightpick__footer").classList.remove("show");
    SetSeasonText2(startDate);
  },
  onSelect: function (start, end) {
    var str = "";
    str += start ? start.format("Do MMMM YYYY") + " to " : "";
    str += end ? end.format("Do MMMM YYYY") : "...";
    document.getElementById("datepickerMobile").innerHTML = str;
    document.getElementById("periodFooter").classList.add("hide");
    document.querySelector(".lightpick__footer").classList.add("show");
    startDate = start;
  },
});

function SetSeasonText2(date) {
  var monthstats = [
    { from: "2020-01-01", to: "2020-02-15", status: "perfect" },
    { from: "2020-02-15", to: "2020-05-20", status: "notRecommended" },
    { from: "2020-09-10", to: "2020-12-31", status: "perfect" },
    { from: "2020-05-20", to: "2020-09-10", status: "good" },
  ];
  myDate = date;
  date.set("year", 2020);
  moment.defaultFormat = "YYYY-MM-DD";
  monthstats.forEach((e) => {
    if (date >= moment(e.from).toDate() && date < moment(e.to).toDate()) {
      var statusPerfect = "";
      var statusGood = "";
      var statusBad = "";

      if (e.status == "good") {
        console.log("good");
        statusGood = "";
        document.getElementById("perfectPeriod").classList.remove("show");
        document.getElementById("badPeriod").classList.remove("show");
        document.getElementById("goodPeriod").classList.add("show");
        document.getElementById("periodFooter").classList.remove("hide");
        document.getElementById("removeOn").classList.add("hide");
      } else if (e.status == "perfect") {
        statusPerfect = "";
        console.log("perfect");
        document.getElementById("perfectPeriod").classList.add("show");
        document.getElementById("badPeriod").classList.remove("show");
        document.getElementById("goodPeriod").classList.remove("show");
        document.getElementById("periodFooter").classList.remove("hide");
        document.getElementById("removeOn").classList.add("hide");
      } else if (e.status == "notRecommended") {
        statusBad = "";
        console.log("bad");
        document.getElementById("perfectPeriod").classList.remove("show");
        document.getElementById("badPeriod").classList.add("show");
        document.getElementById("goodPeriod").classList.remove("show");
        document.getElementById("periodFooter").classList.remove("hide");
        document.getElementById("periodBtn").classList.add("color");
        document.getElementById("removeOn").classList.add("hide");
      }
    }
  });
}
// period mobile end
// incriment
function plus(e) {
  e.parentNode.childNodes.forEach(function (x) {
    if (x.tagName == "INPUT") {
      x.value = parseInt(x.value) + 1;
    }
  });
}
function minus(e) {
  e.parentNode.childNodes.forEach(function (x) {
    if (x.tagName == "INPUT") {
      x.value = parseInt(x.value) - 1;
    }
  });
}



// swipe
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
    } else {
    }
  } else {
    if (yDiff > 0) {
      document.getElementById("mainBlock").classList.add("swipeFull");
      document.getElementById("notificationBtn").classList.add("transformBtn");
    } else {
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

// mobile version
function removeSwipe() {
  document.getElementById("mainBlock").classList.remove("swipeFull");
  document.getElementById("notificationBtn").classList.remove("transformBtn");
}
function removeHeight() {
  document.getElementById("mainBlock").classList.toggle("showSlider");
  document.getElementById("mainSlider").classList.toggle("sliderFull");
  document.getElementById("avatarGroup").classList.toggle("removeGroup");
}
