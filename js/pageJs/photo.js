function exploMaker() {
  document.getElementById("exploMaker").classList.toggle("showChat");
  document.getElementById("voyaGeurs").classList.remove("showChat");
}
function voyaGeurs() {
  document.getElementById("voyaGeurs").classList.toggle("showChat");
  document.getElementById("exploMaker").classList.remove("showChat");
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
  $(".image-upload-wrap").show();
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

// mobile slider
// =====================================
$(".photoMobile__slider").slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 2,
});
// like buttons
var btnContainer = document.getElementById("gallerySlider");
var btns = btnContainer.getElementsByClassName("like");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeLike");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeLike", "");
    }

    // Add the active class to the current/clicked button
    this.className += " activeLike";
  });
}

// addd photo mobile functions (half window )start
// =======================================
var addPhotoList = document.getElementById("addPhotoList");
var plan = document.getElementById("plan");
var addPhotoMobile = document.getElementById("addPhotoMobile");
addPhotoMobile.onclick = function (e) {
  addPhotoList.classList.toggle("activeAdd");
  addPhotoMobile.classList.toggle("activeAdd");
};
// 
var addPhotoList2 = document.getElementById("addPhotoList2");
var plan = document.getElementById("plan");
var addPhotoMobile2 = document.getElementById("addPhotoMobile2");
addPhotoMobile2.onclick = function (e) {
  addPhotoList2.classList.toggle("activeAdd");
  addPhotoMobile2.classList.toggle("activeAdd");
};
//
var avatarModal = document.getElementById("avatarModal");
var avatarModalClose = document.getElementById("avatarModalClose");
var addAvatar = document.getElementById("addAvatar");
addAvatar.onclick = function (e) {
  avatarModal.classList.toggle("activeAdd");
};
avatarModalClose.onclick = function (e) {
  avatarModal.classList.remove("activeAdd");
};
//

var ajouterModal = document.getElementById("ajouterModal");
var ajouterModalClose = document.getElementById("ajouterModalClose");
var ajouterModalBtn = document.getElementById("ajouterModalBtn");
ajouterModalBtn.onclick = function (e) {
  ajouterModal.classList.toggle("activeAdd");
};
ajouterModalClose.onclick = function (e) {
  ajouterModal.classList.remove("activeAdd");
};
// addd photo mobile functions (half window )end
// =======================================
// long touch function start
// ======================================
var onlongtouch;
var timer;
var touchduration = 800;
function touchstart(e) {
  x = e;
  if (!timer) {
    console.log(e)
    timer = setTimeout(() => onlongtouch(e), touchduration);
  }
}
function touchend() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}
onlongtouch = function (e) {
  timer = null;
  if(e.target.closest(".photo__box"))
  {
    console.log("showing blur");
    e.target.closest(".photo__box").classList.toggle("addBlur");

  document.getElementById("main").classList.toggle("addBlur");
  }
  
};
document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("touchstart", touchstart, false);
  window.addEventListener("touchend", touchend, false);
});

var main = document.getElementById("main");

window.onclick = function (event) {
  if (event.target.closest("#plan") || event.target == addPhotoList) {
    addPhotoList.classList.remove("activeAdd");
    addPhotoMobile.classList.remove("activeAdd");
  }
  if (event.target.closest("#plan") || event.target == addPhotoList2) {
    addPhotoList2.classList.remove("activeAdd");
    addPhotoMobile2.classList.remove("activeAdd");
  }
  if (event.target == avatarModal) {
    avatarModal.classList.remove("activeAdd");
  }
  var backBlur = document.querySelectorAll(".backgorundBlur");
  backBlur.forEach((e) => {
    if (event.target == e) {
      main.classList.remove("addBlur");
      var touchLong = document.querySelectorAll(".photo__box");
      touchLong.forEach((e) => {
        e.classList.remove("addBlur");
      });
      e.classList.remove("addBlur");
    }
  });
};
// long touch function start
// ======================================
