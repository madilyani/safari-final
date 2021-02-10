// modals function start
const closeBtns = document.querySelectorAll(".tabClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("activated");
    document.querySelectorAll(".tabBtn").forEach((e) => {
      e.classList.remove("activated");
    });
  });
});
const tabsBtn = document.querySelectorAll(".tabBtn");
const tabsItems = document.querySelectorAll(".tab");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("activated")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("activated");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("activated");
      });
      currentBtn.classList.toggle("activated");
      currentTab.classList.toggle("activated");
    }
  });

  window.onclick = function (event) {

    if (event.target == num1) {
      num1.classList.remove("showNum");
    }
    if (event.target == num2) {
      num2.classList.remove("showNum");
    }
    if (event.target == addPhoto) {
      addPhoto.classList.remove("activated");
      addPhotoBtn.classList.remove("activated");
    }

    tabsItems.forEach((black) => {
      if (black == event.target) {
        black.classList.remove("activated");
        document.querySelectorAll(".tabBtn").forEach((e) => {
          e.classList.remove("activated");
        });
      }
    });
    if (event.target == chatMobile) {
      chatMobile.classList.remove("showChat");
    }
    console.log(event.target.tagName);
    if (
      (event.target.tagName == "I" &&
        event.target.parentNode.parentNode.querySelector(
          ".dropDown__content"
        ) != undefined &&
        event.target.parentNode.parentNode
          .querySelector(".dropDown__content")
          .classList.contains("showList")) ||
      (event.target.tagName == "BUTTON" &&
        event.target.parentNode.querySelector(".dropDown__content") !=
          undefined &&
        event.target.parentNode
          .querySelector(".dropDown__content")
          .classList.contains("showList"))
    ) {
    } else {
      document.querySelectorAll(".dropDown__content").forEach((e) => {
        e.classList.remove("showList");
      });
    }
  };
}
var uuu = null;
document.querySelectorAll(".documents__threeDots").forEach((e) => {
  e.addEventListener("click", showList);
});
document.querySelectorAll(".closeDropDown").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".dropDown__content").forEach((e) => {
      e.classList.remove("showList");
    });
  });
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function showList(e) {
  uuu = e;
  await sleep(100);

  if (e.target.tagName == "I") {
    e.target.parentNode.parentNode
      .querySelector(".dropDown__content")
      .classList.toggle("showList");
  } else {
    e.target.parentNode
      .querySelector(".dropDown__content")
      .classList.toggle("showList");
  }

  //   e.target.classList.toggle("showList");
  //   e.target.parentElement.childElements[1].classList.toggle('showList');
  //   console.log("clicked");
}
function readURL(input) {
  if (input.files) {
    console.log(input.files);
    var reader = new FileReader();
    var beginning = `<div class="subtitile">
        <i class="icon-tick"></i>
          <span class="image-title">`;
    var ending = `</span>
          </div>`;

    reader.onload = function (e) {
      for (var a = 0; a < input.files.length; a++) {
        $("#uploadedFileContent").append(
          beginning + input.files[a].name + ending
        );
      }

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();
      $(".file-upload-outer").addClass("mobileAdd");
      $(".addPhotoBtn").hide();
      $(".photo__valider-btn").hide();
      $(".photo__valider-btn-green").show();
      $(".image-upload-wrap").addClass("image-dropping");
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".addPhotoBtn").show();

  $(".image-upload-wrap").show();
  $(".file-upload-outer").removeClass("mobileAdd");
  $(".photo__valider-btn").show();
  $(".photo__valider-btn-green").hide();
  $(".image-upload-wrap").removeClass("image-dropping");
  $(".subtitile").remove();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
// chat start
// ==========================================================
function exploMaker() {
  document.getElementById("exploMaker").classList.toggle("showChat");
  document.getElementById("voyaGeurs").classList.remove("showChat");
}
function voyaGeurs() {
  document.getElementById("voyaGeurs").classList.toggle("showChat");
  document.getElementById("exploMaker").classList.remove("showChat");
}
// chat end
// ==========================================================
// mobile navigation start
// ==========================================================
function activeHead1() {
  document.getElementById("Personnels").classList.add("activeHead");
  document.getElementById("activeHead-1").classList.add("activeHead");
  document.getElementById("Partages").classList.remove("activeHead");
  document.getElementById("activeHead-2").classList.remove("activeHead");
}
function activeHead2() {
  document.getElementById("Partages").classList.add("activeHead");
  document.getElementById("activeHead-2").classList.add("activeHead");
  document.getElementById("Personnels").classList.remove("activeHead");
  document.getElementById("activeHead-1").classList.remove("activeHead");
}
// mobile navigation end
// ==========================================================
// add file start
// ==========================================================
let addPhotoBtn = document.getElementById("addPhotoBtn");
let addPhoto = document.getElementById("addPhoto");
let addPhotoClose = document.getElementById("addPhotoClose");
addPhotoBtn.onclick = function () {
  addPhoto.classList.toggle("activated");
  addPhotoBtn.classList.toggle("activated");
};
addPhotoClose.onclick = function () {
  addPhoto.classList.remove("activated");
  addPhotoBtn.classList.remove("activated");
};
// add file end
// ==========================================================
// num function start
// ==========================================================
let numBtn1 = document.getElementById("numBtn1");
let num1 = document.getElementById("num1");
let numClose1 = document.getElementById("numClose1");
numBtn1.onclick = function () {
  num1.classList.toggle("showNum");
};
numClose1.onclick = function () {
  num1.classList.remove("showNum");
};
let numBtn2 = document.getElementById("numBtn2");
let num2 = document.getElementById("num2");
let numClose2 = document.getElementById("numClose2");
numBtn2.onclick = function () {
  num2.classList.toggle("showNum");
};
numClose2.onclick = function () {
  num2.classList.remove("showNum");
};
// num function end
// ==========================================================
// window function start
// ==========================================================

//window function end
// ==========================================================
