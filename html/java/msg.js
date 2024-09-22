//messages code
var messageForm = document.getElementsByName("leave_message")[0]; 

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var userName = event.target.name.value;
    var userEmail = event.target.email.value;
    var message = event.target.userMessage.value;

    //testing the value in console to make sure they appear correctly
    console.log("Name is ", userName)
    console.log("Email is ", userEmail);
    console.log("Message is ", message);

    //setting up the variables that will attach the message to appear on the website
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");
    var newMessage = document.createElement("li");

    newMessage.innerHTML =  `
        <h2>${userName}</h2> 
        <h2 href="mailto:${userEmail}">${userEmail}</h2> 
        <span>${message}</span>
    `; //structure of message
    

    // remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click",function(event){
        //identifies the button and removes entry
        var entry = this.parentNode;
        entry.remove();

    })
    
    //attaches the message and remove button
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset()
    
});
