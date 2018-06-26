var promoSlide = document.getElementsByClassName("promo-slide");
var controlSlide = document.getElementsByClassName("control-slide");
var serviceControl = document.getElementsByClassName("service-item");
var serviceDescription = document.getElementsByClassName("service-description");
var closePopup1 = document.getElementsByClassName("close-popup")[0];
var closePopup2 = document.getElementsByClassName("close-popup")[1];
var mapPopup = document.getElementsByClassName("map-popup")[0];
var writePopup = document.getElementsByClassName("write-popup")[0];
var userName = document.querySelector("#popup-name");
var email = document.querySelector("#popup-email");
var form = document.querySelector(".write-popup-feedback");
var mapOpen = document.querySelector(".map-wrap>a");
var writeOpen = document.querySelector(".contacts>a");
var userText = document.querySelector("#popup-text");

for (var i = 0; i < controlSlide.length; i++) {
  controlSlide[i].addEventListener("click", changeSlide);
}
for (var i = 0; i < serviceControl.length; i++) {
  serviceControl[i].addEventListener("click", changeServiceSlide);
}
function changeServiceSlide() {
  changeCLass(serviceControl, serviceDescription, this, "service-active", "slider-block");
}

function changeSlide() {
  changeCLass(controlSlide, promoSlide, this, "active", "slider-flex");
}
function changeCLass(controlSlide, promoSlide, thisItem, active, display) {
  for (var i = 0; i < controlSlide.length; i++) {
    if (controlSlide[i].classList.contains(active)) {
      controlSlide[i].classList.remove(active);
      promoSlide[i].classList.remove(display);
      promoSlide[i].classList.add("slider-none");
    }

  }
  for (var i = 0; i < controlSlide.length; i++) {
    if (controlSlide[i] == thisItem) {
      promoSlide[i].classList.remove("slider-none");
      promoSlide[i].classList.add(display);
    }
  }
  thisItem.classList.add(active);
}

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    toOpenPopup(mapPopup);
  }
);
writeOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    toOpenPopup(writePopup);
  }
);
form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !userText.value || userText.value == "    ") {
    evt.preventDefault();
    removeError(writePopup);
    //не понятная строчка, но без нее не работает.
    writePopup.offsetWidth = writePopup.offsetWidth;
    error(writePopup);
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("email", email.value);
  }
});
userName.addEventListener("blur", removeError);
function toOpenPopup(popup) {
  popup.classList.add("modal-show");
  if (popup == writePopup) {
    if (storageName) {
      userName.value = storageName;
      email.value = storageEmail;
      userText.focus();
    }
    else {
      userName.focus();
    }
  }
}
function error(popup) {
  popup.classList.add("errorInput");
  if (!userName.value) {
    userName.classList.add("errorInput");
  }
  if (!email.value) {
    email.classList.add("errorInput");
  }
  if (!userText.value || userText.value == "    ") {
    userText.classList.add("errorInput");
  }
}
function removeError(popup) {
  popup.classList.remove("errorInput");
  if (userName.value) {
    userName.classList.remove("errorInput");
  }
  if (email.value) {
    email.classList.remove("errorInput");
  }
  if (userText.value || userText.value !== "    ") {
    userText.classList.remove("errorInput");
  }
}

closePopup2.addEventListener("click", function (evt) {
    evt.preventDefault();
    toClosePopup(writePopup);
  }
);
closePopup1.addEventListener("click", function (evt) {
    evt.preventDefault();
    toClosePopup(mapPopup);
  }
);
function toClosePopup(popup) {
  popup.classList.remove("modal-show");
  popup.classList.add("modal-close");
}
