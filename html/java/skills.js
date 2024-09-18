//skills vars
var skills = ["Java", "Python", "Html", "CSS"];
var skillsSelection = document.querySelector(".Skills");
var skillsList = skillsSelection.querySelector("p");

// iterate through skills array and append each value to a div in skills class
for (k = 0; k < skills.length; k++){
    var skill = document.createElement("p");
    skill.innerText = skills[k];
    skillsList.appendChild(skill);
    
}