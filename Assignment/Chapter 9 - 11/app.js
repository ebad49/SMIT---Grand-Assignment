// Question: 1
var userInput = prompt("Enter your city");
userInput = userInput.toLowerCase();
if (userInput === "karachi") {
    alert("Welcome to city of lights");
}
else {
    alert ("Welcome to" + " " + userInput);
}
"<br>" + "<br>"

// Question: 2
var greeting = prompt("Enter your gender");
greeting = greeting.toLowerCase();
if (greeting === "male") {
    alert("Good Morning Sir!");
}
else if (greeting === "female"){
    alert ("Good Morning Madam");
}
else {
    alert("Please enter a valid keyword!");
}
"<br>" + "<br>"

// Question: 3
var signal = prompt("Enter one of the signal lights");
signal = signal.toLowerCase();
if (signal === "red") {
    alert("Must Stop");
}
else if (signal === "yellow"){
    alert ("Ready to Move");
}
else if (signal === "green"){
    alert ("Move Now");
}
else {
    alert("Please enter a valid keyword!" + "<br>" + 
    "e.g: Red, Yellow, Green");
}
"<br>" + "<br>"

// Question: 4
var fuelCheck = +prompt("Input your remaining fuel there");
if (fuelCheck < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert ("Your fuel is ok to drive");
}
"<br>" + "<br>"

// Question: 5.1
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// Question: 5.2
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// Question: 5.3
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// Question: 5.4
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// Question: 5.5
if (true){
alert("True");
}
if (false){
alert("False");
}

// Question: 5.6
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// Question: 6
var subject1 = prompt("Enter your subject 1");
var subject2 = prompt("Enter your subject 2");
var subject3 = prompt("Enter your subject 3");
var sub1Marks = 100;
var sub2Marks = 100;
var sub3Marks = 100;
var obtSub1 = +(prompt("subject 1 Obtained Marks"));
var obtSub2 = +(prompt("subject 2 Obtained Marks"));
var obtSub3 = +(prompt("subject 3 Obtained Marks"));
var totalNumber = sub1Marks + sub2Marks + sub3Marks;
var totalObtained = obtSub1 + obtSub2 + obtSub3;
var percentage = totalObtained / totalNumber * 100;
if (percentage >= 80) {
    document.write("Marks Sheet" + "<br>"+ "<br>"+ "<br>" + "Total Marks : " + " " + totalNumber + "<br>" + 
    "Marks Obtained : " + " " + totalObtained + "<br>" + 
    "Percentage : " + " " + percentage + "%" + "<br>" + 
    "Grade : A-one" + "<br>" + 
    "Remarks : Excellent");
}
else if (percentage >= 70) {
    document.write("Marks Sheet" + "<br>"+ "<br>"+ "<br>" + "Total Marks : " + " " + totalNumber + "<br>" + 
    "Marks Obtained : " + " " + totalObtained + "<br>" + 
    "Percentage : " + " " + percentage + "%" + "<br>" + 
    "Grade : A" + "<br>" + 
    "Remarks : Good");
}
else if (percentage >= 60) {
    document.write("Marks Sheet" + "<br>"+ "<br>"+ "<br>" + "Total Marks : " + " " + totalNumber + "<br>" + 
    "Marks Obtained : " + " " + totalObtained + "<br>" + 
    "Percentage : " + " " + percentage + "%" + "<br>" + 
    "Grade : B" + "<br>" + 
    "Remarks : You need to improve");
}
else if (percentage < 60) {
    document.write("Marks Sheet" + "<br>"+ "<br>"+ "<br>" + "Total Marks : " + " " + totalNumber + "<br>" + 
    "Marks Obtained : " + " " + totalObtained + "<br>" + 
    "Percentage : " + " " + percentage + "%" + "<br>" + 
    "Grade : Fail" + "<br>" + 
    "Remarks : Sorry");
}

// Question: 7
var secretNum = 7;
var userGuess = +prompt("Guess the secret number");
if (userGuess === secretNum) {
    alert("Bingo! Correct answer.")
}
else if (userGuess === secretNum + 1) {
    alert("Close enough to the correct answer!")
}
else {
    alert("Try again!")
}

// Question: 8
var divCheck = +prompt("Check your number whether it is divisible by 3 or not");
;
if (divCheck % 3 === 0) {
    alert(divCheck + " " + "is divisible by 3");
}
else {
    alert(divCheck + " " + "is not divisible by 3");
}

// Question: 9
var numCheck = +prompt("Check the number whether it is even or odd");
;
if (numCheck % 2 === 0) {
    alert(numCheck + " " + "is an even number");
}
else {
    alert(numCheck + " " + "is an odd number");
}


// Question: 10
var temp = +prompt("Write temperature in this box in C");
if (temp > 40) {
    alert("It is too hot outside.")
}
else if (temp > 30) {
    alert("The Weather today is Normal.")
}
else if (temp > 20) {
    alert("Today’s Weather is cool.")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")
}
else {
    alert("OMG! it's so cold, try some hot drink.")
}

// Question: 11
var num1 = +prompt("Enter number 1 there");
var num2 = +prompt("Enter number 2 there");
var operation = prompt("Your operation");

if (operation === "+") {
    alert(num1 + " " + "+" + " " + num2 + " " + "=" + " " + (num1 + num2));
}
else if (operation === "-") {
    alert(num1 + " " + "-" + " " + num2 + " " + "=" + " " + (num1 - num2));
}
else if (operation === "*") {
    alert(num1 + " " + "*" + " " + num2 + " " + "=" + " " + (num1 * num2));
}
else if (operation === "/") {
    alert(num1 + " " + "/" + " " + num2 + " " + "=" + " " + (num1 / num2));
}
else {
    alert("Please write a correct operator!")
}
