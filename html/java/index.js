//footer code
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector(".footer");
var copyright = document.createElement("p");

copyright.innerText = "Arianah Hemby " + thisYear;
footer.appendChild(copyright);

