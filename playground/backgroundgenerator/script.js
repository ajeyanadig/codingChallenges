//BACKGROUND GENERATOR\

// const color1Ele = document.getElementById("color1");
// const color2Ele = document.getElementById("color2");
// const outputTextEle = document.querySelector("p");

// function hexToRGB(hexString) {
//   /*
//   let hexValArr=[];
//   for(let i=0;i<hexString.length;i+=2){
//     hexValArr.push(hexString.slice(i,i+2))
//   }
//   //for bigger values than a 6 digit hexadecimal value;

//   */
//   let hexValArr = [
//     hexString.slice(0, 2),
//     hexString.slice(2, 4),
//     hexString.slice(4),
//   ];
//   let rgbValArr = hexValArr.map((ele) => Number.parseInt(ele, 16));
//   return rgbValArr.join(",");
// }

// function setResult(cssText) {
//   document.body.style.background = cssText;
//   outputTextEle.innerText = cssText;
// }

// function onColorChangeHandler(e) {
//   let rgbVal1, rgbVal2;
//   let eleId = e.target.getAttribute("id").slice(-1);
//   let hexVal = e.target.value.slice(1);

//   if (eleId == 1) {
//     rgbVal1 = hexToRGB(hexVal);
//     rgbVal2 = hexToRGB(color2Ele.value.slice(1));
//     setResult(`linear-gradient(to right, rgb(${rgbVal1}), rgb(${rgbVal2}))`);
//   } else if (eleId == 2) {
//     rgbVal1 = hexToRGB(color1Ele.value.slice(1));
//     rgbVal2 = hexToRGB(hexVal);
//     setResult(`linear-gradient(to right, rgb(${rgbVal1}), rgb(${rgbVal2}))`);
//   } else {
//     console.log("Some error");
//     outputTextEle.innerText = "Some error";
//   }
// }

// color1Ele.addEventListener("input", onColorChangeHandler);
// color2Ele.addEventListener("input", onColorChangeHandler);

// //THIS CAN BE MADE EASIER--> rather than doing hex2rgb, set value in hex only and read from
// //body style, comes in rgb format automatically, but this is a good exervise in itself

"use strict";
const colorEle1 = document.getElementById("color1");
const colorEle2 = document.getElementById("color2");
const textEle = document.querySelector(".css-output-text");
colorEle1.value = "#00FFFF";
colorEle2.value = "#FF0000";
colorEle1.addEventListener("input", onInputChangeHandler);
colorEle2.addEventListener("input", onInputChangeHandler);

function setBackground(val1, val2) {
  document.body.style.background = `linear-gradient(to right,${val1}, ${val2})`;
  textEle.textContent = document.body.style.background;
}
function onInputChangeHandler(e) {
  //tracking
  // console.log(e.target.id);
  // console.log(e.target.value);

  //logic
  if (e.target.id.slice(-1) == "1")
    setBackground(e.target.value, colorEle2.value);
  if (e.target.id.slice(-1) == "2")
    setBackground(colorEle1.value, e.target.value);
}
