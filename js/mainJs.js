var promoSlide = document.getElementsByClassName('promo-slide');
var controlSlide = document.getElementsByClassName('control-slide');
var serviceControl = document.getElementsByClassName('service-item');
var serviceDescription = document.getElementsByClassName('service-description');
for (var i = 0; i < controlSlide.length; i++) {
  controlSlide[i].addEventListener('click', changeSlide);
}
for (var i = 0; i < serviceControl.length; i++) {
  serviceControl[i].addEventListener('click', changeServiceSlide);
}


function changeServiceSlide() {
  changeCLass(serviceControl, serviceDescription, this, 'service-active', 'block');
}

function changeSlide() {
  changeCLass(controlSlide, promoSlide, this, 'active', 'flex');
}


function changeCLass(controlSlide, promoSlide, thisItem, active, display) {
  for (var i = 0; i < controlSlide.length; i++) {
    if (controlSlide[i].classList.contains(active)) {
      controlSlide[i].classList.remove(active);
      promoSlide[i].style.display = 'none';
    }

  }
  for (var i = 0; i < controlSlide.length; i++) {
    if (controlSlide[i] == thisItem) {
      promoSlide[i].style.display = display;
    }
  }
  thisItem.classList.add(active);
}
//попапы
//close
var closePopup1 = document.getElementsByClassName('close-popup')[0];
var closePopup2 = document.getElementsByClassName('close-popup')[1];
var mapPopup = document.getElementsByClassName('map-popup')[0];
var writePopup = document.getElementsByClassName('write-popup')[0];
closePopup2.addEventListener('click', function () {
    toClosePopup(writePopup);
  }
);
closePopup1.addEventListener('click', function () {
    toClosePopup(mapPopup);
  }
);
function toClosePopup(popup) {
  popup.style.display = 'none';
}
//open
var mapOpen=document.getElementsByClassName('map')[0];
var writeOpen=document.getElementById('write-open');
mapOpen.addEventListener('click', function () {
    toOpenPopup(mapPopup);
  }
);
writeOpen.addEventListener('click', function () {
    toOpenPopup(writePopup);
  }
);
function  toOpenPopup(popup){
  popup.style.display='block';
}
