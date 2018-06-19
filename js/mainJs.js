/**
 * Created by Ника on 19.06.2018.
 */
var promoSlide=document.getElementsByClassName('promo-slide');
var controlSlide=document.getElementsByClassName('control-slide');
for(var i=0;i<controlSlide.length;i++){
controlSlide[i].addEventListener('click',changeCLass);}
function changeCLass(){
  for(var i=0;i<controlSlide.length;i++){
    if(controlSlide[i].classList.contains('active')){
      controlSlide[i].classList.remove('active');
    }
  }
  this.classList.add('active');
}
