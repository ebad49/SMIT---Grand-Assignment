// Question: 1
var val1 = +(prompt("Enter your 1st value"));
var val2 = +(prompt("Enter your second value"));
var sum = val1 + val2;
document.write("Question: 1" + " " + "<br>" + 
"Sum of" + " " + val1 + " " + "and" +" " + val2 + " " + "is" + " " + sum + "<br>" + "<br>")

// Question: 2
var sub = val1 - val2;
document.write("Question: 2" + " " +  "<br>" + 
"Subtraction of" + " " + val1 + " " + "and" +" " + val2 + " " + "is" + " " + sub + "<br>" + "<br>")
var multipl = val1 * val2;
document.write("Multiplication of" + " " + val1 + " " + "and" +" " + val2 + " " + "is" + " " + multipl + "<br>" + "<br>")
var div = val1 / val2;
document.write("Division" + " " + val1 + " " + "and" +" " + val2 + " " + "is" + " " + div + "<br>" + "<br>");

// Question: 3
var x
document.write("Question: 3" + " " + "<br>" + 
"Value after variable declaration is: ??" + "<br>" + "<br>");
x = 5;
document.write("Initial value:" + " " + x + "<br>" + "<br>");
document.write("Value after increment is:" + " " + ++x + "<br>" + "<br>");
x = x + 7;
document.write("Value after addition is:" + " " + x + "<br>" + "<br>");
document.write("Value after decrement is:" + " " + --x + "<br>" + "<br>");
document.write("The remainder is :" + " " + x % 3 + "<br>" + "<br>");

// Question: 4
var movieTicket = 600;
document.write("Question: 4" + " " + "<br>" + 
"The cost of buy 5 tickets to a movie is" + " " + 5 * movieTicket + " " + "PKR" + "<br>" + "<br>");

// Question: 5
document.write("Question: 5" + " " + "<br>");
for (var i =1 ; i <= 10 ; i++){
    document.write(4 + " " + "x" + " " + i + " " + "=" + " " + 4*i + "<br>");
}

// Question: 6
var c = 25;
var f = (c * 9 / 5) + 32;
document.write("<br>" + "Question: 6" + " " + "<br>" + 
c + "C is" + " " + f + "F" + "<br>"+ "<br>");
var f = 70;
var c = (f - 32) * 5 / 9;
document.write(f + "F is" + " " + c + " " + "C" + "<br>"+ "<br>");

// Question:7
var item1 = 650;
var item1Quantity = 3;
var item2 = 100;
var item2Quantity = 7;
var total = item1*item1Quantity + item2*item2Quantity;
document.write("Question: 7" + " " + "<br>" + 
"Shopping Cart" + "<br>" + "<br>" + 
"Price of item 1 is" + " " + item1 + "<br>" +
 "Quantity of item 1 is" + " " + item1Quantity + "<br>" + 
 "Price of item 2 is" + " " + item2 + "<br>" +
 "Quantity of item 2 is" + " " + item2Quantity + "<br>" + "<br>" + 
 "Total cost of your order is" + " " + total + "<br>" + "<br>");

//  Question:8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = obtainedMarks / totalMarks * 100;
document.write("Question: 8" + " " + "<br>" + 
"Mark Sheet" + "<br>" + "<br>" + 
"Total marks:" + " " + totalMarks + "<br>" + 
" Marks obtained:" + " " + obtainedMarks + "<br>" + 
"Percentage:" + " " + percentage + "%" + "<br>" + "<br>");

// Question: 9
 
var dollarToRupee = 104.80;
var RiyalToRupee = 28;
var total = 10*dollarToRupee + 25*RiyalToRupee;
document.write("Question: 9" + " " + "<br>" + 
"Currency to PKR" + "<br>" + "<br>" + 
"Total Currency in PKR:" + " " + total  + "<br>" + "<br>")

// Question: 10
var n = 10;
document.write("Question: 10" + " " + "<br>" + 
((n+ 5) * 10) / 2 + "<br>" + "<br>");
// Question: 11

var currentYear = 2020;
var birthYear = 1998;
var age = currentYear - birthYear
document.write("Question: 11" + " " + "<br>" + 
"Current Year:" + " " + currentYear + "<br>" + 
"Birth Year:" + " " + birthYear + "<br>" + 
"Your Age is:" + " " + age + "<br>" + "<br>");
 
// Question: 12
var r = 40;
var circumfarance = 2 * 3.14 * r;
var areaOfCircle = 3.14 * r^2;
document.write("Question: 12" + " " + "<br>" +
"The cirfumferance is" + " " + circumfarance + "<br>" + 
"The area is" + " " + areaOfCircle + "<br>" + "<br>");

// Question: 13
var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var snackPerDay = 3;
var snackRestOfLife = (65-15) * 3;
document.write("Question: 13" + " " + "<br>" +
"Favourite snack:" + " " + snack + "<br>" + 
"Current age:" + " " + currentAge + "<br>" + 
"Estimated Maximum Age:" + " " + maxAge + "<br>" +
"Amount of snacks per day:" + " " + snackPerDay + "<br>" + 
"You will need" + " " + snackRestOfLife + " " + snack + " " + "to last you untill the ripe old age of" + " " + maxAge + "<br>" + "<br>");

