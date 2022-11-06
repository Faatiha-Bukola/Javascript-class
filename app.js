function ball(){
    let ball = document.getElementById('ball')
    ball.style.width = '200px';
    ball.style.height = '200px';
    ball.style.transition = '0.9s ease'
    ball.style.backgroundColor = 'red';
    ball.style.borderRadius = '50%'
}

document.getElementById('ball').addEventListener('mouseover', ball)

// let 
// const 
// var

let myName = 'Tade';
const pi =  3.1428;
var myLast = 'Ogidan';
let age = 45;

var myLast = 67

let rand = Math.random()
rand = Math.floor(rand * 6)
console.log(rand + 1)