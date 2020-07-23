// Question: 1
var students = {};

// Question: 2
var students = [];

// Question: 3
var stringArray = ["Ebad" , "Salman" , "Awais"];

// Question: 4
var numberArray = [1 , 2 , 3 , 4 , 5];

// Question: 5
var booleanArray = [1.1 , 2.1 , 3.1 , 4.1 , 5.1];

// Question: 6
var mixedArray = ["Ebad" , "Salman" , "Awais" , 1 , 2 , 3 , 4 , 5 , 1.1 , 2.1 , 3.1 , 4.1 , 5.1];

// Question: 7
var qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil." , "PhD"];
document.write("Qualifications" + "<br>" + "<br>");
for (var i = 0 ; i < qualification.length ; i++) {
    document.write(i+1 + ")" + " " + qualification[i] + "<br>");
}

// Question: 8
var students = ["Michael" , "John" , "Tony"];
var marks = [320 , 230 , 480];
var percentMicheal = (marks[0]/500 * 100);
var percentJohn = (marks[1]/500 * 100);
var percentTony = (marks[2]/500 * 100);
document.write = ("Score of" + " " + students[0] + " " + "is" + " " + marks[0] + "." + " " + "Percentage:" + " " + percentMicheal + "<br>" + 
"Score of" + " " + students[1] + " " + "is" + " " + marks[1] + "." + " " + "Percentage:" + " " + percentJohn + "<br>" +
"Score of" + " " + students[2] + " " + "is" + " " + marks[2] + "." + " " + "Percentage:" + " " + percentTony + "<br>");

// Question: 9
var colorNames = ["red" , "blue" , "green"];

// Question: 9.a
var userSuggestion = prompt("what color you want to add to the beginning?");
colorNames.unshift(userSuggestion);
document.write("<br>" + "<br>" + "Added color on the begining" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.b
var userSuggestionEnd = prompt("what color you want to add to the end?");
colorNames.push(userSuggestionEnd);
document.write("<br>" + "<br>" + "Added color on the end" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.c
var userSuggestion1 = prompt("what color you want to add to the beginning?");
var userSuggestion2 = prompt("what color you want to add to the beginning?");
colorNames.unshift(userSuggestion1 , userSuggestion2);
document.write("<br>" + "<br>" + "Added 2 colors on the begining" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.d
colorNames.shift();
document.write("<br>" + "<br>" + "Deleted 1 color from the begining" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.e
colorNames.pop();
document.write("<br>" + "<br>" + "Deleted 1 color from the end" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.f
var colorSuggestion = prompt("which color do you want to add?");
var index = prompt("At which index do you want to add this colo?")
colorNames.splice (index,0,colorSuggestion);
document.write("<br>" + "<br>" + colorSuggestion + " " + "is added to" + " " + index + "th" + " " + "index" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.f
document.write("First it was" + "<br>" + "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 9.g
var count = prompt("write number of colors do you want to delete?");
var index = prompt("write index there, from which index do you want to remove?");
colorNames.splice (index,count);
document.write("<br>" + "<br>" + "And now" + "<br>" + count + " " + "colors is/are removed fron index" + " " + index + "<br>"+ "<br>");
for (var i = 0 ; i < colorNames.length ; i++) {
    document.write(i+1 + ")" + " " + colorNames[i] + "<br>");
}

// Question: 10
var scoresOfStudents = [320 , 230 , 480 , 120];
document.write("<br>" + "First it was like this" + "<br>" + scoresOfStudents + "<br>")
scoresOfStudents.sort(),
document.write("<br>" + "Array after sorting" + "<br>" + scoresOfStudents);

// Question: 11
var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
var selectedCities = cities.slice(2,5);
document.write(selectedCities);