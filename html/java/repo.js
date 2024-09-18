// GET java api
async function fetchGit() {
    try {
        var response = await fetch("https://api.github.com/users/ArianahHemby/repos")
        var repositories = await response.json() //fetching repositiories and turning them into readable variable
        console.log(repositories); //printing out the repos to check in console
        
        //print out repositories
        var projectSection = document.getElementById("Projects");
        var projectList = projectSection.querySelector("ul");

        //iterates through each repository name and attaches them to the Projects section as a li element
        for (i = 0; i < repositories.length; i++){
            var project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);

        }
    } 
    catch (error) {
        console.error("Error fetching repositories: ", error); //catch errors
    }
}
fetchGit(); //call async function 