console.log("\n <== First task ==> \n")

let x = "John"
let y = "Doe"
console.log(`${x} <> ${y}`)

const person={
    name: '',
    surname: '',
    email: ''
}
console.log("\n <== Delete email  ==> \n")

delete person.email
console.log(person)

console.log("\n <== Array  ==> \n")

const strings = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9", "string10"]
console.log(strings)

console.log("\n <== Array with 100 nums  ==> \n")

const numHundread = []

for (i=1; i<=100; i++){
    numHundread.push(i)
}
console.log(numHundread)

console.log("\n <== Max Min function  ==> \n")
function maxMin(){
    let x = Math.max(...numHundread)
    let y = Math.min(...numHundread)
    console.log(`Max is: ${x}, and the min is: ${y}`)
}
maxMin()

console.log("\n <== Array of Arrays  ==> \n")

const sumArray = []

for (i=0; i<5; i++){
    let pArray = []
    for (j=0;j<10;j++){
        pArray.push(Math.round(Math.random()* (20-1)+1))
    }
    sumArray.push(pArray)
}
console.log(sumArray)

console.log("\n <== Longest of Arrays  ==> \n")

const shortArr = [1,30,5,10]
const longArr = [4,2,6,2,8,9]

function compare(a,b){
    if (a.length < b.length){
        console.log(b)
    } else {
        console.log(a)
    }
}
compare(shortArr, longArr)

console.log("\n <==  Higher sum of values  ==> \n")

function sumCompare(a,b){
    let first = 0
    let second = 0

    for (let num of a){
        first += num
    }

    for (let num of b){
        second += num
    }

    if (first<second){
        console.log(b)
    } else {
        console.log(a)
    }
}
sumCompare(shortArr, longArr)


// DOM TASKS 

console.log("\n <==  Container ==> \n")

const container = document.getElementById('container')
console.log(container)


console.log("\n <==  Get all td ==> \n")

const allTd = document.getElementsByTagName('td')
console.log(allTd)


console.log("\n <==  CICLE PRINT ==> \n")

function printTd(){
    for(let print of allTd){
        print.innerText = "Text"
    }
}


console.log("\n <==  HEADER CHANGER==> \n")

document.querySelector('.headerCh').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let header = document.getElementsByTagName('h1')
        header[0].innerText = this.value
        this.value = ''
    }
})


console.log("\n <==  Add rows==> \n")

function addRow(){
    const table = document.getElementById('body')
    console.log(table)
    let row = document.createElement('tr')

    for( i =0; i<=4; i++){
    let colums = document.createElement('td')
    colums.textContent = 'text'
    row.appendChild(colums)
}
    table.append(row)
}

console.log("\n <==  Add class==> \n")

function addClass(){
    let rows = document.querySelectorAll('tr')
    for(let ich of rows){
        ich.classList.add('test')
    }
}

console.log("\n <==  Add link background ==> \n")

function addLink(){
    const allLinks = document.querySelectorAll('td a')
    for( let ich of allLinks){
        ich.style.backgroundColor = "rgb(197, 85, 85)"
    }
}

console.log("\n <==  Page loaded ==> \n")

window.onload = ()=>{
    alert('Page loaded!')
}

console.log("\n <==  Page loaded ==> \n")

document.querySelector('.ulItem').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let ul = document.getElementById('unlLi')
        let li = document.createElement('li')
        li.innerText = this.value
        ul.appendChild(li)
        this.value = ''
    }
})

console.log("\n <==  Deleting the li ==> \n")

function emptyLi(){
    let ul = document.querySelectorAll('ul li')
    for ( let li of ul){
        li.remove()
    }
}

console.log("\n <==  Alert url ==> \n")

let alertPop = document.querySelectorAll('a')
for( let alr of alertPop){
    alr.addEventListener('mouseover', ()=>{
        console.log(alr.href)
    })
}
// IMG hide
function hideIMG(){
    let img = document.querySelectorAll('img')
    for(let im of img){
        im.style.display = 'none'
    }
}

// hide table
function hideTable(){
    let table = document.querySelector(".table-cont")
    table.classList.toggle('hideTable')
}