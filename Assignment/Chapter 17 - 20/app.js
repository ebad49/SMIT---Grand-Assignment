// Question: 3
document.write("Question: 3" + " " + "<br>");
for (var i = 1 ; i <= 10 ; i++) {
    document.write(i + "<br>");
}

// Question: 4
var table = +(prompt("Enter a number to show it's multiplication table"));
var length = +(prompt("Enter length of multiplication table"));
document.write("<br>" + "<br>" + "Question: 4" + " " + "<br>");
for (var i =1 ; i <= length ; i++){
    document.write(table + " " + "x" + " " + i + " " + "=" + " " + table*i + "<br>");
}

// Question: 5
var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
document.write("<br>" + "<br>" + "Question: 5" + " " + "<br>");
for (i = 0 ; i <= fruits.length ; i++) {
    document.write(i+1 + ")" + " " + fruits[i] + "<br>");
}
document.write("<br>" + "<br>")
for (i = 0 ; i <= fruits.length ; i++) {
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + "<br>");
}

// Question: 6.1
document.write("<br>" + "<br>" + "Question: 6" + "<br>" + "Counting:" + "<br>" + "<br>");
for (i = 1 ; i <= 15 ; i++) {
    document.write(i + "," + " ");
}
// Question: 6.2
document.write("<br>" + "<br>" + "Reverse counting:" + "<br>");
for (i = 10 ; i >= 1 ; i--) {
    document.write(i + "," + " ");
}
// Question: 6.3
document.write("<br>" + "<br>" + "Evan:" + "<br>");
for (i = 0 ; i <= 20 ; i = i+2) {
    document.write(i + "," + " ");
}

// Question: 6.4
document.write("<br>" + "<br>" + "Odd:" + "<br>");
for (i = 1 ; i <= 20 ; i = i+2) {
    document.write(i + "," + " ");
}

// Question: 6.5
document.write("<br>" + "<br>" + "Series:" + "<br>");
for (i = 2 ; i <= 20 ; i = i+2) {
    document.write(i + "k," + " ");
}

// Question: 7
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery, What do you want to order Sir/Madem?");
order = order.toLowerCase();
for ( var i = 0 ; i < bakeryItems.length ; i++) {
    if (bakeryItems[i] === order) {
        alert(order + " " + "is available in our bakery");
        break
    }
    else {
        alert(order  + " " + "is not available in our bakery");
        break
    }
}



// Question: 8
var set = [24 , 53 , 78 , 91 , 12];
set.sort();
document.write("<br>" + "<br>" + "Question: 8" + "<br>" + "The largest number is" + " " + set[set.length-1]);

// Question: 9
var set = [24 , 53 , 78 , 91 , 12];
set.sort();
document.write("<br>" + "<br>" + "Question: 9" + "<br>" + "The smallest number is" + " " + set[0]);

// Question: 10
document.write("<br>" + "<br>" + "Question: 10" + "<br>" + "Multiples of 5:" + "<br>");
for (i = 5 ; i <= 100 ; i = i+5) {
    document.write(i + "," + " ");
}





