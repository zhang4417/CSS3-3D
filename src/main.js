import $ from "jquery";

let box = document.getElementById("box");
let degX = 0;
let degY = 0;

document.getElementById("rightBtn").onclick = function () {
  degY += 90;
  box.style.cssText = "transform:rotateY(" + degY + "deg)";
};
document.getElementById("leftBtn").onclick = function () {
  degY -= 90;
  box.style.cssText = "transform:rotateY(" + degY + "deg)";
};
document.getElementById("topBtn").onclick = function () {
  degX += 90;
  box.style.cssText = "transform:rotateX(" + degX + "deg)";
};
document.getElementById("downBtn").onclick = function () {
  degX -= 90;
  box.style.cssText = `transform:rotateX(${degX}deg)`;
};

$("#box").on({
  click: () => {
    $(".pic1").toggleClass("act1");
    $(".pic2").toggleClass("act2");
    $(".pic3").toggleClass("act3");
    $(".pic4").toggleClass("act4");
    $(".pic5").toggleClass("act5");
    $(".pic6").toggleClass("act6");
    $("#box").toggleClass("active");
  },
});
