const columnBtn = document.querySelector(".colLabel");
const rowBtn = document.querySelector(".rowLabel");
const flexBox = document.querySelectorAll(".flexbox");

columnBtn.addEventListener("click", () => {
  console.log(flexBox);
  flexBox.forEach((box) => {
    box.classList.add("column");
  });
});

rowBtn.addEventListener("click", () => {
  flexBox.forEach((box) => {
    box.classList.remove("column");
  });
});

const nowrapBtn = document.querySelector(".nowrapLabel");
const wrapBtn = document.querySelector(".wrapLabel");
const wrapRBtn = document.querySelector(".wrapRLabel");
const flexWrap = document.querySelector(".flex-wrap");

nowrapBtn.addEventListener("click", () => {
  flexWrap.style.flexWrap = "nowrap";
});

wrapBtn.addEventListener("click", () => {
  flexWrap.style.flexWrap = "wrap";
});
wrapRBtn.addEventListener("click", () => {
  flexWrap.style.flexWrap = "wrap-reverse";
});

const autoBtn = document.querySelector(".autoLabel");
const lengthBtn = document.querySelector(".lengthLabel");
const percentBtn = document.querySelector(".percentLabel");
const flexBasis = document.querySelector(".flex-basis .box");

autoBtn.addEventListener("click", () => {
  flexBasis.style.flexBasis = "auto";
});

lengthBtn.addEventListener("click", () => {
  flexBasis.style.flexBasis = "200px";
});
percentBtn.addEventListener("click", () => {
  flexBasis.style.flexBasis = "50%";
});

const startBtn = document.querySelector(".startLabel");
const endBtn = document.querySelector(".endLabel");
const centerBtn = document.querySelector(".centerLabel");
const betweenBtn = document.querySelector(".betweenLabel");
const aroundBtn = document.querySelector(".aroundLabel");
const evenlyBtn = document.querySelector(".evenlyLabel");
const flexJustify = document.querySelector(".flex-justify");

startBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "flex-start";
});
endBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "flex-end";
});
centerBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "center";
});
betweenBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "space-between";
});
aroundBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "space-around";
});
evenlyBtn.addEventListener("click", () => {
  flexJustify.style.justifyContent = "space-evenly";
});

const startAlBtn = document.querySelector(".startAlLabel");
const endAlBtn = document.querySelector(".endAlLabel");
const centerAlBtn = document.querySelector(".centerAlLabel");
const flexAlign = document.querySelector(".flex-align");

startAlBtn.addEventListener("click", () => {
  console.log(flexAlign);
  flexAlign.style.alignItems = "flex-start";
});
endAlBtn.addEventListener("click", () => {
  flexAlign.style.alignItems = "flex-end";
});
centerAlBtn.addEventListener("click", () => {
  flexAlign.style.alignItems = "center";
});
