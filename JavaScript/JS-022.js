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

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z