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

const shortArr = [1,4,5]
const longArr = [4,2,6,2,8,9]

function compare(a,b){
    if (a.length < b.length){
        console.log(b)
    } else {
        console.log(a)
    }
}
compare(shortArr, longArr)