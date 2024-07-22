
//js function is a block of code designed to perform a particular task 
//Functons - performs specific task can be called multiple times optionally takes input as parameter and optionally returns value

//how to call a function
function funname(){
    console.log('Function is working')
}
funname()

//1.function declartion 
function sayHello() {
    console.log('hello')
}
sayHello()

//2.
function apple(){
   console.log('this is apple')
}

function banana(){
    console.log('This is banana')
}

function grapes(){
    console.log('this is grapes')
}

apple()
banana()
grapes()

//JavaScript functions are defined with the function keyword.
//You can use a function declaration or a function expression.

//js Return type
/*    
  in js the return keyword is used to within a function to specify the value that the function should produce as its result or return to the caller
  when a function is executed and encounters a return statement,it immediately stops executing and returns the specified value to the caling code
*/

//example 
function myname()
{
   return 'gayu'   
}
let a = myname()
console.log(a)

//function declartion example:

     //syntax - function functionName(parameters){...}
//examples:
//1  output for console.log
function findProduct(a,b)
{
    return a*b
}
console.log(findProduct(4,4))
//----------------------------------------
//2 output for browser 
function myFunction(a,b){
    return a+b
}

let x = myFunction(4,3)
document.getElementById('demo').innerHTML = x
//========================================

//in js the term parameters typically refers to the variables that you define when declaring a function these parameters serve as inputs to the function

//function default parameters
//examples 
// 1. output for console
function welcome(name = 'there') {
    console.log('hi',name)
}
welcome('gayu')
welcome()
//----------------------------------------------
//2. output for browser
function welcome(name = 'there'){
    return 'hi,  ' +name
}
let myname = welcome()
document.getElementById('text').innerHTML = myname

//Arrow Functions
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.

//example
/*    
  ---Normal function---
var x = function(x, y) {
  return x * y;
}

 --- Arrow Function---
const x = (x, y) => x * y;
*/

const fun = (x,y) => x*y
document.getElementById('arrfun').innerHTML = fun(5,5)

//-------------------------------------------------w

//---------Rest parameter---------

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args){
    let sum = 0
    for(let arg of args) sum +=arg
    return sum;
}
let restpara = sum(1,2,3,4,5)
document.getElementById('restpar').innerHTML = restpara

