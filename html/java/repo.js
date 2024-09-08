// GET java api
async function fetchGit() {
    try {
        var response = await fetch("https://api.github.com/users/ArianahHemby/repos")
        var repositories = await response.json()
        console.log(repositories);
        
        //print out repositories
        var projectSection = document.getElementById("Projects");
        var projectList = projectSection.querySelector("ul");

        for (i = 0; i < repositories.length; i++){
            var project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);

        }
    } 
    catch (error) {
        console.error("Projects empty, ", error);
    }
}
fetchGit();