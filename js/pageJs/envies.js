function exploMaker() {
  document.getElementById("exploMaker").classList.toggle("showChat");
  document.getElementById("voyaGeurs").classList.remove("showChat");
}
function voyaGeurs() {
  document.getElementById("voyaGeurs").classList.toggle("showChat");
  document.getElementById("exploMaker").classList.remove("showChat");
}
function clearEnviesInput(e) {
  e.parentNode.childNodes.forEach(function (x) {
    if (x.classList == "envies__Search") {
      x.value = "";
    }
  });
}
let modifiMobileBtn = document.getElementById("modifiMobileBtn");
let modifiMobile = document.getElementById("modifiMobile");
let modifiMobileClose = document.getElementById("modifiMobileClose");
modifiMobileBtn.onclick = function () {
    modifiMobile.classList.toggle("showModifi");
};
modifiMobileClose.onclick = function () {
    modifiMobile.classList.remove("showModifi");
};
