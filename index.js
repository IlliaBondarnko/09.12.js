const button = document.querySelector(".buttOn");
const textarea = document.querySelector(".textArea");

button.textContent = textarea.textContent

// ________________________________________

const img = document.querySelector(".image");


img.src =
"https://i.pinimg.com/236x/21/46/e0/2146e02d334b31172e87746baa098dc1.jpg";


// ________________________________________

const img2 = document.querySelector(".image2");
const link = document.querySelector(".link");


img2.alt = "зображення зміна js";
link.href =
"https://uk.wikinews.org/wiki/%D0%A0%D0%BE%D1%81%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:_%D0%9F%D1%83%D1%82%D1%96%D0%BD_%E2%80%94_%D1%85%D1%83%D0%B9%D0%BB%D0%BE!";


// ________________________________________

const theWholeList = document.querySelector(".listitem")

const first = theWholeList.firstChild;
first.textContent = "after"