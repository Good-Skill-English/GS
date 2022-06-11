var prevScrollPos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos){
    document.querySelector(".container-fluid").style.top = "0";
  }else{
    document.querySelector(".container-fluid").style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
};
