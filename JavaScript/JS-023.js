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

//DEMO-12
let tx12 = "Eu adoro gatos. Os Gatos são muito fáceis de amar. Os Gatos são muito populares.";
const iterator = tx12.matchAll("Gatos");
document.getElementById("demo12").innerHTML = Array.from(iterator);

//DEMO-13
let tx13 = "Eu adoro gatos. Os Gatos são muito fáceis de amar. Os Gatos são muito populares.";
const iterator02 = tx13.matchAll(/Gatos/g);
document.getElementById("demo13").innerHTML = Array.from(iterator02);

//DEMO-14
let tx14 = "Eu adoro gatos. Os Gatos são muito fáceis de amar. Os Gatos são muito populares.";
const iterator03 = tx14.matchAll(/Gatos/gi);
document.getElementById("demo14").innerHTML = Array.from(iterator03);

//DEMO-15
let tx15 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo15").innerHTML = tx15.includes("mundo");

//DEMO-16
let tx16 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo16").innerHTML = tx16.includes("mundo", 12)

//DEMO-17
let tx17 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo17").innerHTML = tx17.startsWith("Olá")

//DEMO-18
let tx18 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo18").innerHTML = tx18.startsWith("mundo");

//DEMO-19
let tx19 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo19").innerHTML = tx19.startsWith("mundo", 5);

//DEMO-20
let tx20 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo20").innerHTML = tx20.startsWith("mundo", 4);

//DEMO-21
let tx21 = "Joe Doe";
document.getElementById("demo21").innerHTML = tx21.endsWith("Doe");

//DEMO-22
let tx22 = "Olá mundo, bem-vindo ao universo.";
document.getElementById("demo22").innerHTML = tx22.endsWith("mundo", 9);

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z