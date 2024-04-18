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


//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z