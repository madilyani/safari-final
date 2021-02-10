// modals function start
const closeBtns = document.querySelectorAll(".modalClose").forEach((e) => {
    e.addEventListener("click", function (x) {
      var ModalId = x.target.dataset.modal;
      document.querySelector("#" + ModalId).classList.remove("active");
    });
  });
  const tabsBtn = document.querySelectorAll(".modal__btn");
  const tabsItems = document.querySelectorAll(".modal");
  tabsBtn.forEach((e) => {
    onTabClick(tabsBtn, tabsItems, e);
  });
  function onTabClick(tabBtns, tabItems, item) {
    item.addEventListener("click", function (e) {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (e.srcElement.classList.contains("active")) {
        e.srcElement.classList.remove("active");
      } else if (!currentBtn.classList.contains("active")) {
        tabBtns.forEach(function (item) {
          item.classList.remove("active");
        });
        tabItems.forEach(function (item) {
          item.classList.remove("active");
        });
        //currentBtn.classList.add('active');
        currentTab.classList.add("active");
      }
    });
    window.onclick = function (event) {
      tabsItems.forEach((black) => {
        if (black == event.target) {
          black.classList.remove("active");
        }
      });
      // onclick for notification
      if (
        !event.target.matches(".notificationHover") &&
        !event.target.closest(".notification")
      ) {
        var dropdowns = document.getElementsByClassName("notification");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("showNotification")) {
            openDropdown.classList.remove("showNotification");
          }
        }
      }
      if (event.target == chatMobile) {
        chatMobile.classList.remove('showChat');
      }
    };
  }
  // modals function end