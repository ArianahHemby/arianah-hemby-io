//footer code
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector(".footer");
var copyright = document.createElement("p");

copyright.innerText = "Arianah Hemby " + thisYear;
footer.appendChild(copyright);

//messages code
var messageForm = document.getElementsByName("leave_message")[0]; 

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var userName = event.target.name.value;
    var userEmail = event.target.email.value;
    var message = event.target.userMessage.value;

    console.log("Name is ", userName)
    console.log("Email is ", userEmail);
    console.log("Message is ", message);

    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");
    var newMessage = document.createElement("li");

    newMessage.innerHTML =  `
        ${userName}</a> 
        <a href="mailto:${userEmail}">${userEmail}</a> 
        <span>${message}</span>
    `;
    
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click",function(event){
        var entry = this.parentNode;
        entry.remove();
        

    })
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset()
});

