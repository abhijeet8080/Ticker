
const changeBg = ()=>{
  const images = [
    "url(1.jpg)",
    "url(2.jpg)",
    "url(3.jpg)",
    "url(4.jpg)",
    "url(5.jpg)",
    "url(6.jpg)",
    "url(7.jpg)",
    "url(8.jpg)",
    "url(9.jpg)",
    "url(10.jpg)",
    "url(11.jpg)",
    "url(12.jpg)",
    "url(13.jpg)",
    "url(14.jpg)",
  ];
const bodyImg = document.querySelector("body");
const bg = images[Math.floor(Math.random()*images.length)];
bodyImg.style.backgroundImage = bg;
}
setInterval(changeBg,4000);