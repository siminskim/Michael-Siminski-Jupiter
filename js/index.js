console.log("hello");
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
let messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", handleFormData);
function handleFormData(e) {
  // ! Dont' forget the console.log()
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
  // unorderd list to put li in
  let unorderedList = document.querySelector();
  let listItem = document.createElement("li");
  console.log(message + "in scope");
}

//   ! uncomment when done----------------------------
// messageForm.reset()

// function handleForm(e){
//     console.log("hellooooo")
// }
