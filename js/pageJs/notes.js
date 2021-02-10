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
}
// chat start
// ==========================================================

window.onclick = function (event) {
  console.log("blabalbal");
  tabsItems.forEach((black) => {
    if (black == event.target) {
      black.classList.remove("activated");
      document.querySelectorAll(".tabBtn").forEach((e) => {
        e.classList.remove("activated");
      });
    }
  });
  if (event.target == notesModal) {
    notesModal.classList.remove("showNum");
    notesModalBtn.classList.remove("showNum");
  }
  if (event.target == chatMobile) {
    chatMobile.classList.remove("showChat");
  }
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
// notesModal function start
// ==========================================================
let notesModalBtn = document.getElementById("notesModalBtn");
let notesModal = document.getElementById("notesModal");
let notesModalClose = document.getElementById("notesModalClose");
let notesModalClose2 = document.getElementById("notesModalClose2");

notesModalBtn.onclick = function () {
  notesModal.classList.toggle("showNum");
  notesModalBtn.classList.toggle("showNum");
};
notesModalClose.onclick = function () {
  notesModal.classList.remove("showNum");
  notesModalBtn.classList.toggle("showNum");
};
notesModalClose2.onclick = function () {
  notesModal.classList.remove("showNum");
  notesModalBtn.classList.toggle("showNum");
};
// notesModal function end
// ==========================================================
function checkFilledOut(e) {
  if (e.id == "TitleModification") {
    if (e.value.length >= 1) {
      document.getElementById("greenBtn").classList.remove("hide");
      document.getElementById("greyBtn").classList.add("hide");
    } else {
      document.getElementById("greenBtn").classList.add("hide");
      document.getElementById("greyBtn").classList.remove("hide");
    }
  }
}

