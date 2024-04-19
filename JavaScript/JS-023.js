//DEMO-01
let text = "Por favor, localize onde 'locate' ocorre!";
let index = text.indexOf("locate");
document.getElementById("demo").innerHTML = index;

//DEMO-02
let tx02 = "Por favor, localize onde 'locate' ocorre!";
let in02 = tx02.lastIndexOf("locate");
document.getElementById("demo02").innerHTML = in02;

//DEMO-03
let tx03 = "Por favor, localize onde 'localizar' ocorre!";
let in03 = tx03.indexOf("John");
document.getElementById("demo03").innerHTML = in03;

//DEMO-04
let tx04 = "Por favor, localize onde ocorre 'localizar'";
let in04 = tx04.indexOf("localizar",15);
document.getElementById("demo04").innerHTML = in04;

//DEMO-05
let tx05 = "Please locate where 'locate' occurs!";
let in05 = tx05.lastIndexOf("locate", 15);
document.getElementById("demo05").innerHTML = in05;

//DEMO-06
let tx06 = "Por favor, localize onde 'localize' ocorre!";
let in06 = tx06.search("localize");
document.getElementById("demo06").innerHTML = in06;

//DEMO-07
let tx07 = "Por favor, localize onde 'localize' ocorre!";
let in07 = tx07.search(/localize/);
document.getElementById("demo07").innerHTML = in07;

//DEMO-08
let tx08 = "A chuva em ESPANHA fica principalmente na planície";
const myArr = tx08.match("uva");
document.getElementById("demo08").innerHTML = myArr.length + " " + myArr;

//DEMO-09
let tx09 = "A chuva em ESPANHA fica principalmente na planície,";
const myArr02 = tx09.match(/uva/);
document.getElementById("demo09").innerHTML = myArr02.length + " " + myArr02;

//DEMO-10
let tx10 = "A chuva em ESPANHA fica principalmente na planície. Tendo semas de chuvas itensas, dando muitas uvas, após os dias de chuvas";
const myArr03 = tx10.match(/uva/g);
document.getElementById("demo10").innerHTML = myArr03.length + " " + myArr03;

//DEMO-11
let tx11 = "A chuva em ESPANHA fica principalmente na planície. Tendo semas de CHUVAS itensas, dando muitas UVAS, após os dias de chuvas";
const myArr04 = tx11.match(/uva/gi);
document.getElementById("demo11").innerHTML = myArr04.length + " " + myArr04;

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z