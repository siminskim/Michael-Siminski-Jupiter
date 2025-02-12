// creating footer element to be appended to body
let footer = document.createElement("footer");
// put body element in a variable
let body = document.querySelector("body");
// creating a <p> element
let copyright = document.createElement("p");
// time and date variables
let today = new Date();
let thisYear = today.getFullYear();
let wholeName = "Michael Siminski";
// setting the text inside the <p> tag. I used the unicode for the copyright symbol
copyright.textContent = `${wholeName} \u00A9 ${thisYear}`;
// added footer at the end of the <body>
body.appendChild(footer);
// added copyright to footer
footer.appendChild(copyright);

// array of my skills
let skills = ["Affinity Design", "JavaScript", "GitHub", "HTML", "CSS"];
// setting variable to skillsList id
let skillsList = document.getElementById("skillsList");

for (let skill of skills) {
  let listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
}

let messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", handleFormData);

function handleFormData(e) {
  e.preventDefault();
  //hide button to prevent user from adding another input
  document.querySelector("[type='submit']").classList.add("hidden");
  //can I use destructuring
  // let { userName, userEmail, message } = e.target;
  let userName = e.target.userName.value;
  let userEmail = e.target.userEmail.value;
  let message = e.target.message.value;
  console.log(userEmail);
  console.log(userName);
  console.log(message);
  displayMessage(message, userEmail, userName);
}

function displayMessage(message, userEmail, userName) {
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  messageSection.classList.remove("hidden");
  newMessage.innerHTML = `<a class="message-a" href="mailto:${userEmail}"> ${userName} </a><span>Wrote: ${message}</span>`;

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode;
    entry.remove();
    messageSection.classList.add("hidden");
    document.querySelector("[type='submit']").classList.remove("hidden");
    console.clear();
    messageForm.reset();
  });
} //end of display message function

// using fetch with chaining .then()
// fetch("https://api.github.com/users/siminskim/repos")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Failed to fetch repositories");
//     }
//   })
//   .then((data) => {
//     for (let i = 0; i <= data.length - 1; i++) {
//       let projectSection = document.getElementById("projects");
//       let projectListItem = document.createElement("li");
//       projectListItem.textContent = data[i].name;
//       projectSection.appendChild(projectListItem);
//     }
//   })
//   .catch((error) => console.log(error));
// !!!!! Same as above but with async and await !!!!!
//put globally so I use it ourside of the for of loop as well
let projectSection = document.getElementById("projects");
let errorMessageH3 = document.createElement("h3");
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/siminskim/repos");
    if (response.ok) {
      let repositories = await response.json();
      let projectList = document.createElement("ul");
      for (let repository of repositories) {
        // let project = document.createElement("li");
        // project.textContent = repository.name;
        // projectList.appendChild(project);
        let projectLink = document.createElement("a");
        projectLink.classList.add("projectLinks");
        projectLink.href = repository.html_url;
        projectLink.textContent = repository.name;
        projectLink.target = "_blank";
        // added for security purposes
        projectLink.rel = "noopener noreferrer";
        projectList.appendChild(projectLink);
      }
      projectSection.appendChild(projectList);
    } else {
      errorMessageH3.textContent =
        "There was a problem retriving data. Please try again later";
      projectSection.appendChild(errorMessageH3);
    }
  } catch (error) {
    errorMessageH3.textContent = "Network error. Please try again later";
    projectSection.appendChild(errorMessageH3);
    console.error(error);
  }
}
fetchData();
