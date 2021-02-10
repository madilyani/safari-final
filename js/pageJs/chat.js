// chat mobile start
// ===================================
function exploMaker() {
    document.getElementById("exploMaker").classList.toggle("showChat");
    document.getElementById("voyaGeurs").classList.remove("showChat");
  }
  function voyaGeurs() {
    document.getElementById("voyaGeurs").classList.toggle("showChat");
    document.getElementById("exploMaker").classList.remove("showChat");
  }
let chatMobile = document.getElementById("chatMobile");
let chatMobileBtn = document.getElementById("chatMobileBtn");
let chatMobileClose = document.getElementById("chatMobileClose");
let chatMobileArrow = document.getElementsByClassName("chatMobileArrow")[0];
let chatMobileArrow1 = document.getElementsByClassName("chatMobileArrow")[1];

chatMobileBtn.onclick = function () {
  chatMobile.classList.toggle("showChat");
};
chatMobileClose.onclick = function () {
  chatMobile.classList.remove("showChat");
};
chatMobileArrow.onclick = function () {
  chatMobile.classList.remove("showChat");
};
chatMobileArrow1.onclick = function () {
  chatMobile.classList.remove("showChat");
};
// chat mobile end
// ===================================