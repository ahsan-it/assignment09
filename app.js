// ? Chapter 12-14
// ! Ans 01
    function isUppercase(char) {
    return char >= 'A' && char <= 'Z';
  }
    function isLowercase(char) {
    return char >= 'a' && char <= 'z';
  }
    function isNumber(char) {
    return char >= '0' && char <= '9';
  }
    const userInput = prompt("Enter a character (number or string):");

  if (isNumber(userInput)) {
    console.log(`${userInput} is a number.`);
  } 
  else if (isUppercase(userInput)) {
    console.log(`${userInput} is an uppercase letter.`);
  } 
  else if (isLowercase(userInput)) {
    console.log(`${userInput} is a lowercase letter.`);
  } 
  else {
    console.log(`${userInput} is not a number, uppercase letter, or lowercase letter.`);
  }
// ! Ans 02
const num1 = parseInt(prompt("Enter the first integer:"))
const num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
  console.log(`The larger integer is: ${num1}`);
} 
else if (num2 > num1) {
  console.log(`The larger integer is: ${num2}`);
} 
else {
  console.log("The two integers are equal.");
}
// ! Ans 03
const userInput = parseFloat(prompt("Enter a number:"));
if (userInput > 0) {
  console.log("The number is positive.");
} 
else if (userInput < 0) {
  console.log("The number is negative.");
} 
else {
  console.log("The number is zero.");
}
// ! Ans 04
const userInput = prompt("Enter a character (a single letter):");
if (userInput.length === 1) {
  const char = userInput.toLowerCase(); 
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${userInput} is a vowel.`);
  } else {
    console.log(`${userInput} is not a vowel.`);
  }
} else {
  console.log("Please enter a single character.");
}
//  ! Ans 05
const correctPassword = "mySecretPassword";
const userPassword = prompt("Enter your password:");
if (!userPassword) {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}
// ! Ans 06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
// ! Ans 07
const userInput = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):"));
if (userInput >= 0 && userInput < 1200) {
  console.log("Good morning!");
} else if (userInput >= 1200 && userInput < 1700) {
  console.log("Good afternoon!");
} else if (userInput >= 1700 && userInput < 2100) {
  console.log("Good evening!");
} else if (userInput >= 2100 && userInput <= 2359) {
  console.log("Good night!");
} else {
  console.log("Invalid input. Please enter a valid time in 24-hour format.");
}
? Chapter 15-16
// ! Ans 01
const studentNames = [];
studentNames.push("Ahsan");
studentNames.push("saadi");
studentNames.push("hassan");
document.write("<h1>Student Names</h1>");
document.write("<ul>");
for (let i = 0; i < studentNames.length; i++) {
  document.write(`<li>${studentNames[i]}</li>`);
}
document.write("</ul>");
// ! Ans 02
const studentArray = [];
studentArray.push({ name: "Ahsan" });
studentArray.push({ name: "saadi" });
studentArray.push({ name: "hassan" });
document.write("<h1>Student Names</h1>");
document.write("<ul>");
for (let i = 0; i < studentArray.length; i++) {
  document.write(`<li>${studentArray[i].name}</li>`);
}
document.write("</ul>");
//  ! Ans 03
const fruits = ["apple", "banana", "cherry", "date"];
// ! Ans 04
const numbers = [1, 2, 3, 4, 5];
//  ! Ans 05
const booleanArray = [true, false, true, true, false];
// ! Ans 06
const mixedArray = [1, "apple", true, null, { name: "John" }];
// ! Ans 07
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Educational Qualifications in Pakistan</h1>"); 
for (let i = 0; i < qualifications.length; i++) {
  document.write(`<li>${i + 1}. ${qualifications[i]}</li>`);
} 
// ! Ans 08
const studentNames = ["Ahsan", "saadi", "hassan"];
const scores = [430, 380, 450];

const totalMarks = 500;
const percentages = [];
for (let i = 0; i < scores.length; i++) {
  const percentage = (scores[i] / totalMarks) * 100;
  percentages.push(percentage);
}
document.write("<h1>Student Scores and Percentages</h1>");
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (let i = 0; i < studentNames.length; i++) {
  document.write(`<tr><td>${studentNames[i]}</td><td>${scores[i]}</td><td>${percentages[i].toFixed(2)}%</td></tr>`);
}
document.write("</table>");
// ! Ans 09
const colors = ["red", "green", "blue"];
document.write("<h2>Initial Array:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
const colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
document.write("<h2>After adding to the beginning:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
const colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
document.write("<h2>After adding to the end:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
colors.unshift("purple", "orange");
document.write("<h2>After adding two more to the beginning:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
colors.shift();
document.write("<h2>After deleting the first color:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
colors.pop();
document.write("<h2>After deleting the last color:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
const indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
const colorToAddAtIndex = prompt("Enter the color to add at that index:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h2>After adding at a specific index:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
const indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
const deleteCount = parseInt(prompt("Enter how many colors to delete:"));
colors.splice(indexToDelete, deleteCount);
document.write("<h2>After deleting at a specific index:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);
// ! Ans 10
const studentScores = [85, 92, 78, 95, 88];
studentScores.sort(function(a, b) {
  return a - b;
});
document.write("<h2>Sorted Student Scores (Ascending Order):</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");
// ! Ans 11
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const selectedCities = [];
selectedCities.push(cities[0], cities[1], cities[2]);
console.log("Selected Cities:", selectedCities);
// ! Ans 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString); 
// ! Ans 13
const queue = [];

queue.push("Value 1");
queue.push("Value 2");
queue.push("Value 3");

const firstIn = queue.shift(); 
const secondIn = queue.shift();

console.log("First In:", firstIn);
console.log("Second In:", secondIn);
console.log("Queue:", queue);
// ! Ans 14
const stack = [];

stack.push("Value 1");
stack.push("Value 2");
stack.push("Value 3");

const lastIn = stack.pop(); 
const secondLastIn = stack.pop(); 

console.log("Last In:", lastIn);
console.log("Second Last In:", secondLastIn);
console.log("Stack:", stack); 
// ! Ans 15
const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<label for='manufacturers'>Select a Manufacturer:</label>");
document.write("<select id='manufacturers' name='manufacturers'>");
for (let i = 0; i < manufacturers.length; i++) {
  document.write(`<option value='${manufacturers[i]}'>${manufacturers[i]}</option>`);
}
document.write("</select>");



  