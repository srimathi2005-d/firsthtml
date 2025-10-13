function double(num){
    return num * 2;
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]    
const tripledArr = numbers.map(num => num * 3);
console.log(tripledArr); // [3, 6, 9, 12, 15 ]

const oddEvenArr = numbers.map(num => (num % 2 === 0 ? 'True' : 'False'));
console.log(oddEvenArr); // ['False', 'True', 'False', 'True', 'False']

function oddeven(num){
    return num % 2 === 0 ? 'True' : 'False';
}
const oddEvenArr2 = numbers.map(oddeven);
console.log(oddEvenArr2); // ['False', 'True', 'False', 'True', 'False']

let oddnumbers= numbers.filter(num => num % 2 !== 0);
console.log(oddnumbers); // [1, 3, 5]


function multiplesof5(num){
    return num % 5 === 0;
}   
let array=[3,15,20,15,27]
let m5= array.filter(multiplesof5);
console.log(m5); // [15, 20, 15]


let array1=[1,2,3,4,5];
let sum= array1.reduce((product,current) =>{ return product * current; }, 1);
console.log(sum); // 120


function eventripled(num){
    return num * 3;
}

function isEven(num){
    return num % 2 === 0;
}   
let array2=[1,2,3,4,5];
let tripledArray = array2.map(eventripled);
console.log(isEven(tripledArray)); // [False, True, False, True, False]


let b=[1,2,3,4,5];
const [one,,two,three] = b;
console.log(three); // 4


//spread operator ...b
let num=[0,,...b,6,7];
console.log(num); // [ 0, <1 empty item>, 1, 2, 3, 4, 5, 6, 7 ]

const object1 = {x: 1, y: 2};
const object2 = {z: 3};
const spread = {...object1, ...object2};
console.log(spread); // { x: 1, y: 2, z: 3 }  



//Promises give us a way to handle asynchronous operations in JavaScript. 
//A Promise represents a value that may be available now, in the future, or never.
//It can be in one of three states: pending, fulfilled, or rejected. 


const promises = new Promise((resolve, reject) => {
    let success = true;             

    if (success) {
        resolve("Promise resolved successfully!");
    }   
    else {  
        reject("Promise rejected.");
    }

});
promises.then(message => {
    console.log(message); // "Promise resolved successfully!"
}
).catch(error => {
    console.error(error);
}           
);      
// Async/Await example      
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();       
        console.log(data); // Logs the fetched data 
    } catch (error) {
        console.error('Error fetching data:', error);
    }   
}
fetchData();        
//console.log("Hello World");   




fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));        

// Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
// It is built into most modern browsers and provides a more powerful and flexible way to handle network requests compared to older methods like XMLHttpRequest (XHR).
// The Fetch API uses Promises, making it easier to work with asynchronous operations.                      

async function fetchDataAsync() {                   
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();       
        console.log(data); // Logs the fetched data 
    } catch (error) {
        console.error('Error fetching data:', error);
    }           
}
fetchDataAsync();
//console.log("Hello World");   
// The async/await syntax is a more readable and concise way to work with Promises in JavaScript.   
// It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain.
// The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.
// This helps to avoid the "callback hell" that can occur with nested callbacks in traditional asynchronous programming.        


//String literals

let name="John";
let age=30;
let city="New York";
let message=`My name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(message); // My name is John, I am 30 years old and I live in New York.
console.log(`I am ${age}`);