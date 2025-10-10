//console.log("Hello World");

/*let object = {name: "John", age: 30, city: "New York"};
let object2= object;
object.age=31;
console.log(object);//{ name: 'John', age: 31, city: 'New York' }
console.log(object2.age);  //31 */

/*console.log(~5); //-6
console.log(~-5); //4
console.log(~0); //-1
console.log(9&5); //1 IF BOTH ARE EQUAL 0 ELSE 1 WHILE TAKING BINARY VALUES
console.log(9|5); //13 IF ANY ONE IS 1 THEN 1 ELSE 0 WHILE TAKING BINARY VALUES
console.log(9^5); //12 //IF BOTH ARE SAME 0 ELSE 1 WHILE TAKING BINARY VALUES       
console.log(5<<2); //20  //5*2^2

function sum(a,b){
    console.log(a+b);
}*/
/*const sum = (a,b) => {
    console.log(a+b);
    }
sum(9,5 );
sum(10,20);
sum(100,200);
sum(1000,2000);
*/

function playGame(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  document.getElementById('userChoice').textContent = `Your Choice: ${userChoice}`;
  document.getElementById('computerChoice').textContent = `Computer’s Choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw! 😐";
    document.getElementById('result').style.color = "#666";
  } 
  else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win! 🎉";
    document.getElementById('result').style.color = "green";
  } 
  else {
    result = "You Lose! 💀";
    document.getElementById('result').style.color = "red";
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}
