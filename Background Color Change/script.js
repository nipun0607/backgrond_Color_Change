let button = document.getElementById("btn");

let colorArray =[" rgb(2,0,36)"," rgb(0, 255, 200)"," rgb(247, 0, 255)","rgb(255, 166, 0)","rgb(255, 0, 0)",
"rgb(0, 255, 0)","rgb(250, 0, 255)","rgb(0, 0, 255)","rgb(245, 240, 0)","rgb(255, 251, 0)","rgb(0, 255, 191);","rgb(255, 0, 234)","rgb(0, 255, 136)","rgb(179, 255, 0)","rgb(255, 102, 0)",
"rgb(195, 0, 255)","rgb(255, 0, 128)","rgb(155, 0, 108)"," rgb(105, 105, 118)","rgb(0, 0, 0)","rgb(105, 0, 0)"," rgb(105, 102, 0)",
"rgb(255, 255, 255)","rgb(205, 205, 255)","rgb(255, 132, 132)"]

let i=0;

button.addEventListener("click", () => {
    document.body.style.background = colorArray;
    if (i == colorArray.length) {
        i = 0;
      }
      document.body.style.backgroundColor = colorArray[i];
      i++;
        button.classList.add("button");

    setTimeout(() => {
        button.classList.remove("button");
    },300);
})