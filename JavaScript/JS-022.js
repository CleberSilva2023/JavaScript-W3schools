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

//DEMO-21
let text19 = "     Olá mundo!     ";
let text20 = text19.trimEnd();
document.getElementById("demo21").innerHTML = "Comprimento text19 = " + text19.length + "<br>Comprimento text20 = " + text20.length;

//DEMO-22
let text21 = "5";
text22 = text21.padStart(4,"0");
document.getElementById("demo22").innerHTML = text22;

//DEMO-23
let teste = "5";
document.getElementById("demo23").innerHTML = teste.padStart(4,"x");

//DEMO-24
let numb = 5;
let teste2 = numb.toString();
document.getElementById("demo24").innerHTML = teste2.padStart(4,0);

//DEMO-25
let text23 = "5";
text23 = text23.padEnd(4,"0");
document.getElementById("demo25").innerHTML = text23;

//DEMO-26
let text24 = "5";
document.getElementById("demo26").innerHTML = text24.padEnd(4,"x");

//DEMO-27
let num = 5;
let texto3 = num.toString();
document.getElementById("demo27").innerHTML = texto3.padEnd(4,"x");

//DEMO-28
let texto4 = "Olá mundo!"
let result = texto4.repeat(2);
document.getElementById("demo28").innerHTML = result; 

//DEMO-29
let texto5 = "Olá mundo!";
let result2 = texto5.repeat(4);
document.getElementById("demo29").innerHTML = result2;

//DEMO-30
document.getElementById("but03").addEventListener("click", function myFunction() {
        let texto6 = document.getElementById("demo30").innerHTML;
        document.getElementById("demo30").innerHTML = texto6.replace("Microsoft", "W3Schools");}
);

//DEMO-31
document.getElementById("but04").addEventListener("click", function myFunction() {
    let texto7 = document.getElementById("demo31").innerHTML;
    document.getElementById("demo31").innerHTML = texto7.replace("Microsoft", "W3Schools");
});

//DEMO-32
document.getElementById("but05").addEventListener ("click", function myFunction() {
    let t08 = document.getElementById("demo32").innerHTML;
    document.getElementById("demo32").innerHTML = t08.replace("MICROSOFT", "W3Schools"); 
});

//DEMO-33
document.getElementById("but06").addEventListener ("click", function myFunction() {
    let t09 = document.getElementById("demo33").innerHTML;
    document.getElementById("demo33").innerHTML = t09.replace(/MICROSOFT/i, "W3Schools")
});

//DEMO-34
document.getElementById("but07").addEventListener ("click", function myFunction() {
    let t10 = document.getElementById("demo34").innerHTML;
    document.getElementById("demo34").innerHTML = t10.replace(/Microsoft/g, "W3Schools");
});

//DEMO-35
let t11 = "Eu adoro gatos. Os gatos são muito fáceis de amar. Os gatos são muito populares."
t11 = t11.replaceAll("Gatos", "Cachorros");
t11 = t11.replaceAll("gatos", "cachorros");
document.getElementById("demo35").innerHTML = t11;

//DEMO-36
let t12 = "Eu adoro gatos. Os gatos são muito fáceis de amar. Os gatos são muito populares";
t12 = t12.replaceAll(/Gatos/g, "Cachorros");
t12 = t12.replaceAll(/gatos/g, "cachorros");
document.getElementById("demo36").innerHTML = t12;

//DEMO-37
let t13 = "a,b,c,d,e,f";
const myArray = t13.split(",");
document.getElementById("demo37").innerHTML = myArray[0];

//DEMO-38
let t14 = "Olá Mundo!";
const myArr = t14.split("");
t14 = "";
for (let i = 0; i < myArr.length; i++) {
    t14 += myArr[i] + "<br>"
}
document.getElementById("demo38").innerHTML = t14;

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z