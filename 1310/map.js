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