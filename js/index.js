// creating footer element to be appended to body
let footer = document.createElement("footer");
// put body element in a variable
let body = document.querySelector("body");
let copyright = document.createElement("p");
// time and date variables
let today = new Date();
let thisYear = today.getFullYear();
let wholeName = "Michael Siminski";
copyright.innerHTML = `${wholeName} &copy ${thisYear}`;
body.appendChild(footer);
footer.appendChild(copyright);

// unorder list
let skills = ["HTML", "CSS", "GitHub", "Affinity Design", "JavaScript"];
let skillsList = document.getElementById("skillsList");

for (let i = 0; i <= skills.length - 1; i++) {
  let listItem = document.createElement("li");
  listItem.innerText = skills[i];
  skillsList.appendChild(listItem);
}

// let messageForm = document.getElementsByName('leave_message')
let messageForm = document.querySelector("[name='leave_message']");

messageForm.addEventListener("submit", handleFormData);
function handleFormData(e) {
  // ! Dont' forget to remove the console.log()
  e.preventDefault();
  let userName = e.target.userName.value;
  console.log(userName);
  let email = e.target.userEmail.value;
  console.log(email);
  let message = e.target.message.value;
  console.log(message);
  displayMessage(message, email, userName);
}

function displayMessage(message, email, userName) {
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  messageSection.classList.remove("hidden");
  newMessage.innerHTML = `<a href="mailto:${email}"> ${userName} </a><span>wrote: ${message}</span>`;

  let removeButton = messageList.appendChild(newMessage);
} //end of display message function

//   ! uncomment when done----------------------------
// messageForm.reset()

// function handleForm(e){
//     console.log("hellooooo")
// }
