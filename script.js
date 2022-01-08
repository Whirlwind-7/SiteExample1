//window.addEventListener("scroll", myScript);
let x=0;
let body = document.querySelector('body');
let styleCss = document.getElementById('style');
let scrollIdent = document.querySelector('scrollBar');
//function myScript(){
//    x = x + window.scrollY;
//    alert(x);
//    x = 0;
//  };



function unshow(){
  document.getElementById("body").classList.remove("show");
  document.getElementById("body").classList.add("unShow");
}
function show(){
  document.getElementById("body").classList.remove("unShow");
  document.getElementById("body").classList.add("show");
}



function firstWindow(){
  styleCss.href = "style1.css";
  document.getElementById("logo").src="./images/Logo.png";
  document.getElementById("scullBG").classList.remove("displayNone");
  document.getElementById("scull").src="./images/Skull1.png";
  document.getElementById("title").innerHTML="#1 Top Scariest Ghost 2020";
  document.getElementById("mainTitle").innerHTML="RESPAWN THE SPOOKY SKULL";
  document.getElementById("content").innerHTML="In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind.";
  document.getElementById("line1").src="./images/line1.png";
  document.getElementById("nameScull").innerHTML="Captain Sem";
  document.getElementById("subtitleScull").innerHTML="Veteran Spooky Ghost";
  document.getElementById("firstLi").src="./images/bar1.png";
  document.getElementById("secondLi").src="./images/bar2.png";
  document.getElementById("secondLi").src="./images/bar2.png";
  document.getElementById("line2").src="./images/line2.png";
}
function secondWindow(){
  styleCss.href = "style2.css";
  document.getElementById("logo").src="./images/Logo2.png";
  document.getElementById("scullBG").classList.add("displayNone");
  document.getElementById("scull").src="./images/AdinoGrahami.png";
  document.getElementById("title").innerHTML="#2 top Best duo";
  document.getElementById("mainTitle").innerHTML="BRING BACK MY COTTON CANDY";
  document.getElementById("content").innerHTML="Adino steals his brother cotton candy and eats them all in one bite, such a hungry beast. Grahami can't hold any longer his anger to Adino.";
  document.getElementById("line1").src="./images/line1_2.png";
  document.getElementById("nameScull").innerHTML="Adino & Grahami";
  document.getElementById("subtitleScull").innerHTML="No words can describe them";
  document.getElementById("firstLi").src="./images/bar2.png";
  document.getElementById("secondLi").src="./images/bar1.png";
  document.getElementById("thirdLi").src="./images/bar2.png";
  document.getElementById("line2").src="./images/line2_1.png";
}
function thirdWindow(){
  styleCss.href = "style3.css";
  document.getElementById("logo").src="./images/Logo.png";
  document.getElementById("scullBG").classList.remove("displayNone");
  document.getElementById("scull").src="./images/Skull3.png";
  document.getElementById("title").innerHTML="#3 Top Scariest Ghost 2020";
  document.getElementById("mainTitle").innerHTML="UOOOO TRICK OR TREAT!!";
  document.getElementById("content").innerHTML="Hi I'm Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia.";
  document.getElementById("line1").src="./images/line1_3.png";
  document.getElementById("nameScull").innerHTML="The Labu “Reiza”";
  document.getElementById("subtitleScull").innerHTML="The Living Pumpkin";
  document.getElementById("firstLi").src="./images/bar2.png";
  document.getElementById("secondLi").src="./images/bar2.png";
  document.getElementById("thirdLi").src="./images/bar1.png";
  document.getElementById("line2").src="./images/line2_2.png";
}


if (window.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+
    window.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    window.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    window.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  window.attachEvent("onmousewheel", onWheel);
}
// Это решение предусматривает поддержку IE8-
function onWheel(e) {
  e = e || window.event;

  // deltaY, detail содержат пиксели
  // wheelDelta не дает возможность узнать количество пикселей
  // onwheel || MozMousePixelScroll || onmousewheel
  var delta = e.deltaY || e.detail || e.wheelDelta;

  x = x + delta;
  if (x == 0){
    unshow();
    setTimeout(firstWindow,2000);
    setTimeout(show,2000);
  } else if (x == 125){
    unshow();
    setTimeout(secondWindow,2000);
    setTimeout(show,2000);
  } else if (x == 250){
    unshow();
    setTimeout(thirdWindow,2000);
    setTimeout(show,2000);
  } else if (x < 0){
    x = 0;
  } else if (x > 250){
    x = 250;
  }
    

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}