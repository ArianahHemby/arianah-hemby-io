//footer vars
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector(".footer");
var copyright = document.createElement("p");



//footer code
copyright.innerText = "Arianah Hemby " + thisYear;
footer.appendChild(copyright);

