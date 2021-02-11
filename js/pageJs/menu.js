// profile start
let profileBtn = document.getElementById("profileBtn");
let profile = document.getElementById("profile");
let profleClose = document.getElementById("profleClose");
profileBtn.onclick = function () {
  profile.classList.toggle("activated");
};
profleClose.onclick = function () {
  profile.classList.remove("activated");
};
// profile end
// settings start
let settingsBtn = document.getElementById("settingsBtn");
let settings = document.getElementById("settings");
let settingsClose = document.getElementById("settingsClose");
settingsBtn.onclick = function () {
  settings.classList.toggle("activated");
};
settingsClose.onclick = function () {
  settings.classList.remove("activated");
};
// settings end
