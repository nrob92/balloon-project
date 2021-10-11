const circles = document.querySelectorAll(".circle");
const counts = document.querySelector(".count")

let colors = [
  "crimson",
  "gold",
  "aqua",
  "saddlebrown",
  "OliveDrab",
  "SkyBlue",
  "PowderBlue",
  "coral",
  "Peru",
  "teal",
  "SandyBrown",
  "SpringGreen",
  "Thistle",
  "plum",
  "SeaGreen",
  "DarkGoldenRod",
  "Sienna",
  "grey",
  "pink",
  "purple",
];

window.onload = () => {
  document.querySelectorAll(".circle").innerHTML = balloonColor();
};

document.querySelectorAll(".circle").innerHTML = transparent();








let count = 20;





function balloonColor() {
  circles.forEach((circle) => {
    circle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
}



function transparent() {
  circles.forEach((circle) => {
    circle.addEventListener("click",function(){
      circle.style.backgroundColor = "transparent";
      count -= 1
      counts.innerHTML = `Pop all the ${count} Balloons!`
      if (count == 0) {
        circle.style.backgroundColor = balloonColor()
        counts.innerHTML = `Pop all the 20 Balloons!`
        count = 20
      }
    })
  });
}









