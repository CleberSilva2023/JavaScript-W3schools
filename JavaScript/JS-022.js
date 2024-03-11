//DEMO-1
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;

//DEMO-2
var text2 = "OLÁ MUNDO";
document.getElementById("demo2").innerHTML = text.charAt(0);

//DEMO-3
let text3 = "Olá mundo";
document.getElementById("demo3").innerHTML = text3.charCodeAt(0)

//DEMO-4
const name = "W3Schools";
let letter = name.at(2)
document.getElementById("demo4").innerHTML = letter;

//DEMO-5
const name2 = "W3Schools";
let letter2 = name[2];
document.getElementById("demo5").innerHTML = letter;

//DEMO-6
let text4 = "Olá mundo!"
document.getElementById("demo6").innerHTML = text[0];

//DEMO-7
let text5 = "Olá mundo! Demonstração 7°"
text5[0] = "A";  //Não funciona
document.getElementById("demo7").innerHTML = text5;

//DEMO-8
let text6 = "Maçã, Banana, Kiwi";
let part = text6.slice(6,12);
document.getElementById("demo8").innerHTML = part;

//DEMO-9
let text7 = "Maçã, Banana, Kiwi";
let part2 = text7.slice(6)
document.getElementById("demo9").innerHTML = part2

//DEMO-10
let text8 = "Maçã, Banana, Kiwi";
let part3 = text8.slice(-12);
document.getElementById("demo10").innerHTML = part3;

//DEMO-11
let text9 = "Maçã, Banana, Kiwi";
let part4 = text9.slice(-12,-6)
document.getElementById("demo11").innerHTML = part4;

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z