/**
 * Created by Ника on 19.06.2018.
 */
var promoSlide=document.getElementsByClassName('promo-slide');
var controlSlide=document.getElementsByClassName('control-slide');
var serviceControl=document.getElementsByClassName('service-item');
var serviceDescription=document.getElementsByClassName('service-description');
for(var i=0;i<controlSlide.length;i++){
controlSlide[i].addEventListener('click',changeSlide);
}
for(var i=0;i<serviceControl.length;i++){
  serviceControl[i].addEventListener('click',changeServiceSlide);
}


function changeServiceSlide(){
  changeCLass(serviceControl,serviceDescription,this,'service-active','block');
}

function changeSlide(){
  changeCLass(controlSlide,promoSlide,this,'active','flex');
}






function changeCLass(controlSlide,promoSlide,thisItem,active,display){
  for(var i=0;i<controlSlide.length;i++){
    if(controlSlide[i].classList.contains(active)){
      controlSlide[i].classList.remove(active);
      promoSlide[i].style.display='none';
    }

  }
  for(var i=0;i<controlSlide.length;i++) {
    if (controlSlide[i] == thisItem) {
      promoSlide[i].style.display = display;
    }
  }
  thisItem.classList.add(active);
}


