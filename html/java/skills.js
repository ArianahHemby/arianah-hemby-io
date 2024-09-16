//skills vars
var skills = ["Java", "Python", "Html", "CSS"];
var skillsSelection = document.querySelector(".Skills");
var skillsList = skillsSelection.querySelector("div");

// skills code
for (k = 0; k < skills.length; k++){
    var skill = document.createElement("div");
    skill.innerText = skills[k];
    skillsList.appendChild(skill);
    
}