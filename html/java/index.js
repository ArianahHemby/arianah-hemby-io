//footer code
var today = new Date();
var thisYear = today.getFullYear(); //use Date function to get the year and put into variable
var footer = document.querySelector(".footer");
var copyright = document.createElement("p"); //create element for footer to be attached to 

copyright.innerText = "Arianah Hemby " + thisYear; //attach the date to appear in the p element text
footer.appendChild(copyright); 

