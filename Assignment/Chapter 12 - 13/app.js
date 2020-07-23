// Question:2
var int1 = +prompt("Enter number 1");
var int2 = +prompt("Enter number 2");
var larger = int1 + int2 + 1;
if (int1 > int2) {
    alert(int1 + 1);
}
else if (int2 > int1) {
    alert(int2 + 1);
}
else if (int1 = int2) {
    alert("number 1 amd number 2 are same");
}

// Question:3
var num = +prompt("Enter the number below");
if (num > 0) {
    alert(num + " " + "is Positive Integer");
}
else if (num < 0) {
    alert(num + " " + "is negative Integer");
}
else if (num === 0) {
    alert("It is zero");
}

// Question:5
var password = "password123";
var enterPass = prompt("Please enter your password");
if (enterPass === password) {
    alert("Correct! The password you entered matches the original password")

}
else if (enterPass !== password) {
    alert("Incorrect password");
}
else {
    alert("Please enter your password");
}

// Question:6
var greeting = " ";
var hour = 13;
if (hour < 18) {
    alert(greeting = "Good day");
}
else {
    alert(greeting = "Good evening");
}

// Question:7



