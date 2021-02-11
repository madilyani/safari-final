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
// editior
var uuu = null;
document.querySelectorAll(".notes__more-btn").forEach((e) => {
  e.addEventListener("click", showList);
});
document.querySelectorAll(".closeDropDown").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".notes__more-content").forEach((e) => {
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
      .querySelector(".notes__more-content")
      .classList.toggle("showList");
  } else {
    e.target.parentNode
      .querySelector(".notes__more-content")
      .classList.toggle("showList");
  }
}
window.onclick = function (event) {
  if (
    (event.target.tagName == "I" &&
      event.target.parentNode.parentNode.querySelector(
        ".notes__more-content"
      ) != undefined &&
      event.target.parentNode.parentNode
        .querySelector(".notes__more-content")
        .classList.contains("showList")) ||
    (event.target.tagName == "BUTTON" &&
      event.target.parentNode.querySelector(".notes__more-content") !=
        undefined &&
      event.target.parentNode
        .querySelector(".notes__more-content")
        .classList.contains("showList"))
  ) {
  } else {
    document.querySelectorAll(".notes__more-content").forEach((e) => {
      e.classList.remove("showList");
    });
  }
};
let output = document.getElementById("output");
let buttons = document.getElementsByClassName("tool--btn");
var fontSize = 14;
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd === "createlink") {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else if (cmd === "decreaseFontSize") {
      if (fontSize > 12) fontSize -= 4;
      document.execCommand("fontSize", false, "1");
      resetFont();
    } else if (cmd === "increaseFontSize") {
      if (fontSize < 26) fontSize += 4;
      document.execCommand("fontSize", false, "1");
      resetFont();
    } else {
      console.log("function name:" + cmd);
      document.execCommand(cmd, false, null);
    }
  });
}

function resetFont() {
  $("font[size=1]")
    .removeAttr("size")
    .css("font-size", fontSize + "px");
}

function deleteNoteUpload(button) {
  console.log("delete clicked");
  button.parentNode.remove();
}
function readURLNoteEdit(input) {
  if (input.files) {
    console.log(input.files);
    var reader = new FileReader();
    var beginning = `<div class="uploadedFileContent">
        <span class="image-tick"><i class='icon-picture'></i></span>
        <span class="image-title">`;
    var ending = `</span><i class="upDelete icon-close" onclick="deleteNoteUpload(this)">
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
      $(".image-upload-wrap").hide();

      $(".photo__valider-btn-green").show();
      $(".image-upload-wrap").addClass("image-dropping");
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}
function removeUploadNoteEdit() {
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
