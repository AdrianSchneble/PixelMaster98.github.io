//document.getElementById("header").style.border = "2px solid green";

document.getElementsByTagName("html")[0]
  .addEventListener("keypress", function () { moveDown(event); });
document.getElementsByTagName("html")[0].onclick = function () { };

function moveDown(ev) {
  let char = document.getElementById("char");
  let keyCode = String.fromCharCode(ev.which).toLowerCase();

  let c = window.getComputedStyle(char);
  switch (keyCode) {
    case "s":
      char.style.top = Number(String(c.top).substring(0, c.top.length - 2)) + 5 + "px";
      break;
    case "w":
      char.style.top = Number(String(c.top).substring(0, c.top.length - 2)) - 5 + "px";
      break;
    case "a":
      char.style.left = Number(String(c.left).substring(0, c.left.length - 2)) - 5 + "px";
      break;
    case "d":
      char.style.left = Number(String(c.left).substring(0, c.left.length - 2)) + 5 + "px";
      break;
  }
  /*let el = document.getElementById("contact");
  el.innerHTML = el.innerHTML + t + ";";*/
}