/**
 * Created by Ника on 19.06.2018.
 */
var promoSlide=document.getElementsByClassName('promo-slide');
var controlSlide=document.getElementsByClassName('control-slide');
for(var i=0;i<controlSlide.length;i++){
controlSlide[i].addEventListener('click',changeCLass);
}
function changeCLass(){
  for(var i=0;i<controlSlide.length;i++){
    if(controlSlide[i].classList.contains('active')){
      controlSlide[i].classList.remove('active');
      promoSlide[i].style.display='none';
    }

  }
  for(var i=0;i<controlSlide.length;i++) {
    if (controlSlide[i] == this) {
      promoSlide[i].style.display = 'flex';
    }
  }
  this.classList.add('active');

}


