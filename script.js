let internalJsExample = document.createElement("h1")
internalJsExample.innerHTML= "Esther is totally confuse. Please try again later";
document.getElementById('internal').append(internalJsExample)

var  oyinbo = 'Damilare'
let dudu = "Michael"

// let name = 'Esther';
// var lastName = 'Okoh';
// const nickName = 'Oluwaseun';
 

 console.log(oyinbo)

let name = 'Esther';
let lastName = "Okoh";
let nickName = `Oluwaseun`;
let age = 16
let marritalStatus = null;
let feelingForMichael= undefined;
let single;
let skinColor = true;

console.log(name)
console.log(age)
console.log(typeof(name))
console.log(typeof(lastName))
console.log(typeof(age))
console.log(typeof(marritalStatus))
console.log(typeof(feelingForMichael))
console.log(typeof(single))
console.log(typeof(skinColor))

let addmission_$Status
let addmission_Status
let addmission$Status
let addmissionStatus
let _addmissionStatus
let addmissionstatus
let $addmissionstatus
let __addmissionStatus


document.getElementById('example').innerHTML = name + ' ' + nickName + ' ' + lastName


var oyinbo = "Esther"
dudu = 'Isaac'


// console.log(oyinbo)


// data types: Number
const pi = 3.1428;
const g = 9.8

// math objects
// Math.round()
console.log(Math.round(pi))
console.log(Math.round(g))

// Math.floor()
console.log(Math.floor(pi))
console.log(Math.floor(g))

// .ceil()
console.log(Math.ceil(g))
console.log(Math.ceil(pi))
console.log(Math.ceil(3.01))

// .min()

console.log(Math.min(4,2,6,7,8,1,6))

// .max()
console.log(Math.max(4,2,6,7,8,1,6))

// .pow()
console.log(Math.pow(3,2))

// .sqrt()
console.log(Math.sqrt(9))
console.log(Math.sqrt(100))

// abs()
console.log(Math.abs(-10))


// .random()
console.log(Math.random())

let randOne = Math.random()

console.log(Math.ceil(randOne))

let randNum = Math.random() * 6
randNum = Math.ceil(randNum)
console.log(randNum)

let anotherRandNum1 = Math.floor(Math.random() * 6 ) +1
let anotherRandNum2 = Math.floor(Math.random() * 7 ) 
console.log(anotherRandNum1,anotherRandNum2)

// string datatype
let firstName = "Ruth";
let lastNam = 'Ufot';
let stateOfOrigin = `Akwa-Ibom`

// string concatenation
let fullName = firstName + lastName
console.log(fullName)



console.log("My name is " + firstName + " " + lastNam + ". I am from " + stateOfOrigin + " state")

console.log(fullName)

// template literals
console.log(`My name is ${firstName} ${lastNam} and I am ${stateOfOrigin} state`)

// escaping characters
let message = 'What\'s your favorite\'s color?'
let message2 = "What's your favorite's color?"
let message3 = `What's your favorite color?`
let message4 = '\tLorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto consequatur nesciunt sed temporibus omnis ad, \n \tvitae vero libero tempora maxime soluta rem praesentium aliquid eaque, tenetur similique perferendis. Ipsa, quisquam.'
console.log(message4)


// string method
let js = 'javascript'

// .length
console.log(js.length)

// assessing characters base on there index
console.log(js[0])
console.log(js[7])
console.log(js[4])
console.log(js[9])

// toUpperCase & toLowerCase

console.log(js.toUpperCase())

let py = 'PYTHON'
console.log(py.toLowerCase())

// .slice()
console.log(js.slice(0,4))
console.log(js.slice(0,1))
// alert(js.slice(0,1))

// let username = prompt('Enter your username')
// alert(username)

// let myName = prompt('What is your name?')
// let fletter = myName.slice(0,1)
// fletter = fletter.toUpperCase()

// let otherletter = myName.slice(1, myName.length)
// otherletter = otherletter.toLowerCase()
// let output = fletter + otherletter
// alert(output)

// .include()
console.log(js.includes('s'))
console.log(js.includes('e'))

// .repeat()
console.log(js.repeat(3))

// .replace()
console.log(js.replace('j', 'Br'))

// .split()
let pyt = "I love javascript"
console.log(pyt.split())
console.log(pyt.split(' '))


// OPERATOR
// comparism OPERATOR
// > <  >= <= == === !==

console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 2)
console.log(3 <= 2)
console.log('3' == 3)
console.log('3' === 3)
console.log(3 !== 3)


// logical operator
// ampersand AND &&

console.log(3 > 2 &&  2 > 3)
console.log(3 > 2 &&  2 < 3)


// pipe  OR  ||

console.log(3 > 2 || 2 > 3)
console.log(3 < 2 || 2 > 3)

console.log(true && !true)
console.log(true || !true)
console.log(!true || !true)

// INCREMENT AND DECREMENT OPERATOR

let count = 10
++count
count++
console.log(count)

let newCount = 10
--newCount
--newCount
console.log(newCount)

let numValue = 0
// numValue = numValue + 1
numValue += 1
numValue += 1
numValue += 1
numValue += 1
console.log(numValue)

let numVal = 10
numVal -= 1
numVal -= 1
numVal -= 1
numVal -= 1
console.log(numVal)


let multi = 3
multi /= 2
console.log(multi)


let now = Date()
console.log(now)

let currentDate = new Date()
let month = currentDate.getMonth()
let day = currentDate.getDay()
let date = currentDate.getDate()
let hour = currentDate.getHours()
let minute = currentDate.getMinutes()
let second = currentDate.getSeconds()
let year = currentDate.getFullYear()

console.log(`Todays date is ${date}-${month + 1}-${year}, and the time is ${minute}:${second}:${hour}`)



let futuredate = new Date('25 september 2022')
// console.log(futuredate)
futuredate = futuredate - currentDate
console.log(futuredate)

let ruthDay = futuredate / 24 / 3600 / 1000
console.log(ruthDay)



// let sideA = prompt('Enter side A')
// let sideB = prompt('Enter side B')
// let sideC = prompt('Enter side C')
// let perimeter = parseInt(sideA)  + parseInt(sideB) + parseInt(sideC)
// console.log(perimeter)

// conditional statement
// syntax
// if( your condition ){
//     your code goes here
// }


// if 
if( 3 > 2 ){
    document.getElementById('lasop1').innerHTML='I am single and searching'
// 
}


let status = 'single'
// if else
if( status == 'single' ){
    document.getElementById('lasop2').innerHTML='I am married. I am not searching'
}else{
    document.getElementById('lasop2').innerHTML='I am single and not searching'
}

// if else if else
let marriageAbleAge = 25
let myAge = 18
if( myAge > marriageAbleAge && status ===  'single'){
    document.getElementById('lasop3').innerHTML ='You are due for marriage'
}else if(myAge < marriageAbleAge &&  status === 'married' ){
    document.getElementById('lasop3').innerHTML ='You rushed into marriage';
}else if(myAge < marriageAbleAge && status === 'single'){
    document.getElementById('lasop3').innerHTML= `You  ${marriageAbleAge - myAge} years let before ypou can get married`
}


let ufot = new Date();
if(ufot.getHours()  < 12){
    document.getElementById('lasop11').innerHTML= 'Good morning!'
}else if(ufot.getHours() >= 12 && ufot.getHours() <  16){
    document.getElementById('lasop11').innerHTML= 'Good Afternoon!'
}else if(ufot.getHours() >= 16 && ufot.getHours() < 20){
    document.getElementById('lasop11').innerHTML= 'Good Evening!'
}else{
    document.getElementById('lasop11').innerHTML= 'Good Night!'
}

let  person1Name = 'ruth'
let person1Sex = 'female'
let person1Age = 52


let ruth =['ruth', 'female', 52, true, null, undefined]
console.log(ruth[0])
console.log(ruth[1])
console.log(ruth.length)

let emptyArray = new Array()
console.log(emptyArray)


let emptyArray1 = []
console.log(emptyArray1)




// Array Method
// .concat, .includes, .toString, indexof, slice, push. pop, shift, unshift, sort, reverse, join


let numbers = [1, 2, 3, 4, 5, 6, 7,8]
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


  console.log(countries.length)


//   .concat
  console.log(numbers.concat(countries))

//   .includes
console.log(countries.includes('Germany'))


// let classList = ['ruth', 'esther', 'damilare', 'gbenga', 'isaac']
// let checkPartyInvitee = prompt("What is your name?")
// if(checkPartyInvitee ===''){
//     document.getElementById('lasop12').innerHTML= `Idiot, enter a valid name`
// }
// else if(classList.includes(checkPartyInvitee)){
//     document.getElementById('lasop12').innerHTML= `${checkPartyInvitee}, You are welcome to the party, please have a seat`
// }else{
//     document.getElementById('lasop12').innerHTML= `${checkPartyInvitee}, oooh Sorry !!!, You are not invited to the party, please vacate the premises now`
// }

// .toString
console.log(countries.toString())

// indexOf
console.log(countries.indexOf('Hungary'))

// let checkIndex=prompt('Enter country name')
// if(countries.includes(checkIndex)){
//     document.getElementById('lasop13').innerHTML=`${checkIndex} is existing country`
// }else if(countries.indexOf(checkIndex) == -1){
//     countries.push(checkIndex)
//     console.log(countries)
//     document.getElementById('lasop13').innerHTML=`${checkIndex} is not an existing country`
// } 

console.log(countries.slice(0,5))

// .sort
console.log(countries.sort())
let numbering = [2, 23, 12, 56, 1, 0, 45, 3, 4, 26, 44, 14, 6, 7, 15, 19, 25]

// console.log(numbering.sort())
let sortNumber = numbering.sort(function(f, u){
    return f-u;
})
console.log(sortNumber)

// .reverse
// console.log(countries.reverse())

// .join
console.log(countries.join());
console.log(countries.join(''));
console.log(countries.join(' '));
console.log(countries.join(', '));
console.log(countries.join('# '));

// .pop
console.log(countries);
countries.pop();
countries.pop();
countries.pop();
console.log(countries);

// .push
countries.push('Nigeria');
countries.push('Sudan');
console.log(countries);


// .shift
countries.shift();
console.log(countries);
// .unshift
countries.unshift('Algeria');
console.log(countries);



// loop
// for loop
// while loop
// do while
// for of loop

// syntax
// for(initialization, condition, increment/decrement){
//     output
// }

for(let i =0; i < 5; i++){
    console.log(i)
}
for(let i =1; i <= 5; i++){
    console.log(`${i}: I love javascript`)
}

let empty455=[]
for(let i =1; i <= 5; i++){
    let randomNUm =Math.floor(Math.random() * 50) + 1
    empty455.push(randomNUm)
}
console.log(empty455)


for(let i =1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


console.log(53 % 2)


// let i = 0;
// while(i <= 5){
//     consolen.log(i);
//     i++
// }

// let esther = ['linus', 'yahoo girl no laptop', 'fair', 'foody']
// console.log(esther[1])
// for (let i = 0; i < esther.length; i++){

// }


let sum = 0;
for (let i = 1; i <= 5; i++){
    sum = sum + i
}

console.log(sum)

// function

// function functioncname(params) {
//     code goes here
// }

function addNumber(params) {
    let a = 6
    let b = 10
    console.log(a + b)   
}
addNumber()

function multiply(params) {
    let e = 7
    let w = 10
    console.log(e * w)    
}
multiply()
function addNumber1(a) {
    let c = a + 10
    console.log(c)
}
addNumber1(3)
addNumber1(5)

function addNumber2(x, y, z) {
    return x + y + z
}

console.log(addNumber2(4, 5, 8))
console.log(addNumber2(7, 0, 5))
console.log(addNumber2(1, 5, 7))
