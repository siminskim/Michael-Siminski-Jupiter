// creating footer element to be appended to body
let footer = document.createElement("footer");
// put body element in a variable
let body = document.querySelector("body");
// creating a <p> element
let copyright = document.createElement("p");
// time and date variables
let today = new Date();
let thisYear = today.getFullYear();
// name for copyRight
let wholeName = "Michael Siminski";
// setting the text inside the <p> tag.Used innerHtml because of the &copy to put in the copyright symbol
copyright.innerHTML = `${wholeName} &copy ${thisYear}`;
// added footer at the end of the <body>
body.appendChild(footer);
// added copyright to footer
footer.appendChild(copyright);

// array of my skills
let skills = ["Affinity Design", "JavaScript", "GitHub", "HTML", "CSS"];
// setting variable to skillsList id
let skillsList = document.getElementById("skillsList");

for (let i = 0; i <= skills.length - 1; i++) {
  let listItem = document.createElement("li");
  listItem.innerText = skills[i];
  skillsList.appendChild(listItem);
}

let messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", handleFormData);

function handleFormData(e) {
  e.preventDefault();
  //hide button to prevent user from adding another input
  document.querySelector("[type='submit']").classList.add("hidden");
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
  newMessage.innerHTML = `<a class="message-a" href="mailto:${email}"> ${userName} </a><span>Wrote: ${message}</span>`;

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode;
    entry.remove();
    document.getElementById("messages").classList.add("hidden");
    document.querySelector("[type='submit']").classList.remove("hidden");
    messageForm.reset();
  });
} //end of display message function
