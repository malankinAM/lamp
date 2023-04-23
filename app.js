const bg= document.querySelector(".bg");

document.querySelector(".btn").addEventListener("click", () =>
 {
  switch (bg.className) {
    case "bg click":
        bg.className ="bg click2";
        break;
        default: bg.className = "bg click"
  }
})
  