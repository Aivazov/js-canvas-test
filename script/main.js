import { linksInfo } from "./helpers/linksInfo.js";

const header = document.createElement("header");
document.body.prepend(header);

header.style.backgroundColor = "blue";
header.style.height = "50px";
header.style.width = "100%";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";

for (let i = 0; i < linksInfo.length; i++) {
  const element = linksInfo[i];
  appendNavLink(element.filename, element.link);
}

function appendNavLink(textName, link) {
  const commonCanvasLink = document.createElement("a");
  commonCanvasLink.style.color = "#fff";
  commonCanvasLink.textContent = textName;
  commonCanvasLink.href = link;
  header.append(commonCanvasLink);
}

const x = {
  a: 10,
  b: 20,
  c: {
    a: 100,
    b: 200,
  },
};

// const y = Object.assign(x);
// const y = new Object(x);
// const y = { ...x }; //copy without nested objects. They will have a common reference
// y.a = 40;
// y.c.a = 101;
// console.log(x.c === y.c);
// console.log("x", x);
// console.log("y", y);
