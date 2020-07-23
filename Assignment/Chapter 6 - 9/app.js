// Question: 1
var a = 10;
document.write("Question: 1" + " " + "<br>" +
"Result:" + "<br>" + 
"The value of a is:" + " " + a + "<br>" + 
"........................................." + "<br>" + "<br>" + 
"The value of ++a is:" + " " + ++a + "<br>" + 
"Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" + 
"The value of a++ is:" + " " + a++ + "<br>" + 
"Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" + 
"The value of --a is:" + " " + --a + "<br>" + 
"Now the value of a is:" + " " + a + "<br>" + "<br>" + "<br>" + 
"The value of a-- is:" + " " + a-- + "<br>" + 
"Now the value of a is:" + " " + a + "<br>" + "<br>");

// Question: 2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b-- ;
document.write("Question: 2" + " " + "<br>" +
"a is" + " " + a + "<br>" + 
"b is" + " " + b + "<br>" + 
"result is" + " " + result + "<br>" + "<br>");

// Explaination
// at --a it shows first decrease 1 then print a so at that position it will be 1;
// --a = 1 and --b will zero same logic will be applied there so 1-0 = 1;
// 1 + ++b; b was zero so ++b means first add 1 and then print b so b was 0 now it will be 1 and added to 1 will be 2;
// now 2 + b--; b-- means first print the value of b then minus 1 so b is equal to 1 and it will added to 2 result will be 3

// Question: 3
"Question: 3" + " " + "<br>"
var userInput = prompt("Enter your name");
userInput = userInput.toLowerCase();
alert("Welcome" + " " + userInput);
"<br>" + "<br>"

// Question: 5
var input = +(prompt("Enter you number there", 5));
input = input.toLowerCase();
document.write("Question: 5" + " " + "<br>");
for (var i =1 ; i <= 10 ; i++){
    document.write(input + " " + "x" + " " + i + " " + "=" + " " + input*i + "<br>");
}

// Question: 6
var subject1 = prompt("Enter your subject 1");
subject1 = subject1.toLowerCase();
var subject2 = prompt("Enter your subject 2");
subject2 = subject2.toLowerCase();
var subject3 = prompt("Enter your subject 3");
subject3 = subject3.toLowerCase();
var sub1Marks = 100;
var sub2Marks = 100;
var sub3Marks = 100;
var obtSub1 = +(prompt("subject 1 Obtained Marks"));
obtSub1 = obtSub1.toLowerCase();
var obtSub2 = +(prompt("subject 2 Obtained Marks"));
obtSub2 = obtSub2.toLowerCase();
var obtSub3 = +(prompt("subject 3 Obtained Marks"));
obtSub3 = obtSub3.toLowerCase();
var percentSub1 = obtSub1 / sub1Marks * 100;
var percentSub2 = obtSub2 / sub2Marks * 100;
var percentSub3 = obtSub3 / sub3Marks * 100;
var totalNumber = sub1Marks + sub2Marks + sub3Marks;
var totalObtained = obtSub1 + obtSub2 + obtSub3;
var percentage = totalObtained / totalNumber * 100;


document.write("Subject" + " " + "Total Marks" + " " + "Obtained Marks" + " " + "Percentage" + "<br>" + 
subject1 + " " + sub1Marks + " " + obtSub1 + " " + percentSub1 + "%" + "<br>" +
subject2 + " " + sub2Marks + " " + obtSub2 + " " + percentSub2 + "%" + "<br>" +
subject3 + " " + sub3Marks + " " + obtSub3 + " " + percentSub3 + "%" + "<br>" + 
totalNumber + " " + totalObtained + " " + percentage + "%");
