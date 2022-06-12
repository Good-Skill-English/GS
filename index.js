$("homePage").ready(function(){
  document.location.href = "#homePage";
});

var prevScrollPos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos){
    $(".container-fluid").css("top","0");
  }else{
    $(".container-fluid").css("top","-50px");
  }
  prevScrollPos = currentScrollPos;
};
