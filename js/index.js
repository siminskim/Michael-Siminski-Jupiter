
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
let skillsList = document.getElementById('skillsList')
console.log(skillsList)

for(let i = 0; i <= skills.length - 1; i++){
    // console.log(skills[i])
    let listItem = document.createElement('li')
    listItem.innerText = skills[i]
    skillsList.appendChild(listItem)
}

