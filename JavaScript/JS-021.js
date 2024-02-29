let text = "João Ninguém" // Cadeia de caracteres escrita entre aspas
document.getElementById("demo").innerHTML = text;

//Demo2
let carName1 = "Volvo XC60"; // Aspas duplas
let carName2 = 'Volvo XC60'; // Aspas simples
document.getElementById("demo2").innerHTML = carName1 + " " + carName2;

//Demo3
let answer1 = "It's alright = Está tudo bem ?";
let answer2 = "Ele chama-se 'Joãozinho' ";
let answer3 = 'Ele chama-se "Joãozinho".';
document.getElementById("demo3").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

//Demo4
let text2 = `É muitas vezes chamado "Johnny"`;
document.getElementById("demo4").innerHTML = text2;

//Demo5
let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo5").innerHTML = text3.length;

//Demo6
let text4 = "Nós somos os chamados \"Vikings\" do norte.";
document.getElementById("demo6").innerHTML = text4;

//Demo7
let text5 = 'It\'s alright. = Está tudo bem.'
document.getElementById("demo7").innerHTML = text5;

//Demo8
let text6 = "O carácter \\ é designado por barra invertida.";
document.getElementById("demo8").innerHTML = text6;

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z