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

//DEMO-12
let str = "Maçã, Banana, Kiwi";
document.getElementById("demo12").innerHTML = str.substring(6,13);

//DEMO-13
let str2 = "Maçã, Banana, Kiwi";
document.getElementById("demo13").innerHTML = str2.substr(6,6);

//DEMO-14
let str3 = "Maçã, Banana, Kiwi";
document.getElementById("demo14").innerHTML = str3.substr(6);

//DEMO-15
let str4 = "Maçã, Banana, Kiwi";
document.getElementById("demo15").innerHTML = str.substr(-4);

//DEMO-16
function myFunction() {
    let text10 = document.getElementById("demo16").innerHTML;
    document.getElementById("demo16").innerHTML = text10.toUpperCase();
}

//DEMO-17
document.getElementById("but02").addEventListener("click",function myFunction() {
    let text11 = document.getElementById("demo17").innerHTML;
    document.getElementById("demo17").innerHTML = text11.toLowerCase();
});

//DEMO-18
let text12 = "Olá";
let text13 = "mundo!";
let text14 = text12.concat(" ", text13);
document.getElementById("demo18").innerHTML = text14;

//DEMO-19
let text15 = "      Olá mundo!      ";
let text16 = text15.trim();
document.getElementById("demo19").innerHTML = "Length text15 = " + text15.length + "<br>Length text16 = " + text16.length;

//DEMO-20
let text17 = "     Olá mundo!     ";
let text18 = text17.trimStart();

document.getElementById("demo20").innerHTML = "Length text17 = " + text17.length + "<br>Length text18 = " + text18.length;

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z