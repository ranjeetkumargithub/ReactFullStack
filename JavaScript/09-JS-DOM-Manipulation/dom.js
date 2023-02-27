/**
 * DOM -> Document object Model
 * JavaScript -> access the HTML tags -> modify them
 * document -> DOM, window -> BOM
 */

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);


/**
 * document.getElementById();
 * document.getElementsByClassName();
 * document.getElementsByTagName();
 * document.querySelector();
 */

const navTag = document.querySelector("nav");
console.log(navTag);

const navTagWithClass = document.querySelector(".main-nav");
console.log(navTagWithClass);

const navTagWithId = document.querySelector("#navbar");  // Most preferable
console.log(navTagWithId);

/**
 * change the content of html element
 * text content
 * html content
 */
const divTag = document.querySelector("#change");
divTag.innerHTML = `<h1>Hello <span style = "color: orange">Good Evening</span> </h1>`;


/**
 * change the styles
 */
const h2Tag = document.querySelector("#styles h2");
h2Tag.style.backgroundColor = "red";
h2Tag.style.color = "white";
h2Tag.style.padding = "20px";
h2Tag.style.margin = "20px";
h2Tag.style.textAlign = "center";


/**
 * change thr attributes
 * getAttribute() -> getAttribute("name");
 * setAttribute() -> setAttribute("name", "value");
 */
const imageTag = document.querySelector("#image img");
imageTag.style.width = "300px";
imageTag.style.height = "200px";
imageTag.style.margin = "20px";
imageTag.style.borderRadius = "20px";
imageTag.style.boxShadow = "0 0 10px grey";

console.log(imageTag.getAttribute("src"));
imageTag.setAttribute("src", "../images/card_4.jpg");





