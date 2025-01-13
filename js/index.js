let footer = document.createElement('footer')
let body = document.querySelector('body')
let copyright = document.createElement('p')
// time and date variables
let today = new Date()
console.log(today)
let thisYear = today.getFullYear()
console.log(thisYear)
let a = 'something'
let b = 'something'

// document.body.appendChild(footer).textContent('hello')
// document.querySelector('footer').textContent = 'hello'
body.appendChild(footer).textContent = 'hello'