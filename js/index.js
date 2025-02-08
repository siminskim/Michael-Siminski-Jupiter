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
  //! create element and appendChild instead of innerhtml
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
// .!!!!! Same as above but with async and await
//put globally so I use it ourside of the for of loop as well
let projectSection = document.getElementById("projects");
let errorMessageH3 = document.createElement("h3");
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/siminskim/repos");
    // console.log(response);
    if (response.ok) {
      let repositories = await response.json();
      let projectList = document.createElement("ul");
      projectSection.appendChild(projectList);
      for (let repository of repositories) {
        let project = document.createElement("li");
        project.innerText = repository.name;
        projectList.appendChild(project);
      }
    } else {
      errorMessageH3.innerText =
        "There was a problem retriving data. Please try again later";
      projectSection.appendChild(errorMessageH3);
      throw new Error("Failed to fetch repositories");
    }
  } catch (error) {
    errorMessageH3.innerText = "Network error. Please try again later";
    projectSection.appendChild(errorMessageH3);
    console.log(error);
  }
}
fetchData();
