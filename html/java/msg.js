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
    

    // remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click",function(event){
        var entry = this.parentNode;
        entry.remove();

        updateStorage();

    })
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    saveToStorage(userName, userEmail, userMessage);

    messageForm.reset()
    
});

/*
function saveToStorage(name, email, message) {
    var messages = JSON.parse(localStorage.getItem("savedMsg")) || [];
    messages.push(userName, userEmail, userMessage);
    localStorage.setItem("savedMsgs", JSON.stringify(messages))
}

function updateStorage() {
    var messages = [];
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");

    for (k = 0; k < messages.length; k++){
        var msg = document.createElement("li");
        msg.innerText = messages[k];
        messageList.appendChild(msg);
        
    }

    localStorage.setItem("savedMsgs", JSON.stringify(messages))
}

function loadMsg() {
    var messages = localStorage.getItem("savedMsg") || [];
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");

    for (k = 0; k < messages.length; k++){
        var msg = document.createElement("li");
        msg.innerHTML = `
            ${msg.userName} 
            <a href="mailto:${msg.userEmail}">${msg.userEmail}</a> 
            <span>${msg.message}</span>
        `;
    
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click",function(event){
        var entry = this.parentNode;
        entry.remove();

        updateStorage();

    })
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    }
}

window.addEventListener("loadPage", loadMsg); */