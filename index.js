
const changeBg = ()=>{
  const images = [
    "url(1.jpg)",
    "url(2.jpg)",
    "url(3.jpg)",
    "url(4.jpg)",
    "url(5.jpg)"
  ];
const bodyImg = document.querySelector("body");
const bg = images[Math.floor(Math.random()*images.length)];
bodyImg.style.backgroundImage = bg;
}
setInterval(changeBg,4000);