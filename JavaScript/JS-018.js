//DEMONSTRAÇÃO 1
function myFunction(p1,p2) {
    return p1 * p2;
}
let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;

//DEMONSTRAÇÃO 2
let a = myFunction(4, 3);
document.getElementById("demo2").innerHTML = a;
function myFunction(b, c) {
    return b * c;
}

//DEMONSTRAÇÃO 3
function toCelsius(f) {
    return (5/9) * (f-32);
}
let value = toCelsius(77);
document.getElementById("demo3").innerHTML = value;

//DEMONSTRAÇÃO 4
function toCelsius(f2) {
    return (5/9) * (f2-32);
}
let value2 = toCelsius();
document.getElementById("demo4").innerHTML = value2;

//DEMONSTRAÇÃO 5
function toCelsius(f3) {
    return (5/9) * (f3-32);
}
let value3 = toCelsius;
document.getElementById("demo5").innerHTML = value3;

//DEMONSTRAÇÃO 6
let text = "A temperatura é " + toCelsius(77) + " Celsius.";
document.getElementById("demo6").innerHTML = text;
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

//DEMONSTRAÇÃO 7
let text2 = "No exterior: " + typeof carName;
document.getElementById("demo7").innerHTML = text2;

//DEMONSTRAÇÃO 8
function myFunction() {
    let carName = "Volvo";
    let text2 = "No interior: " + typeof carName + " " + carName;
    document.getElementById("demo8").innerHTML = text2;
}
myFunction();

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z