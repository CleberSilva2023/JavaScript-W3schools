//DEMO-01
let tx01 = `Olá mundo!`;
document.getElementById("demo").innerHTML = tx01;

//DEMO-02
let tx02 = `É muitas vezes chamado “Johnny” `;
document.getElementById("demo02").innerHTML = tx02;

//DEMO-03
let tx03 = 
`A rápida
raposa castanha
salta sobre
o cão preguiçoso`;
document.getElementById("demo03").innerHTML = tx03;

//DEMO-04
let firstName = "John"; //primeiroNome
let lastName = "Doe";  //últimoNome

let tx04 = `Bem-vindos ${firstName}, ${lastName}!`;
document.getElementById("demo04").innerHTML = tx04;

//DEMO-05
let preço = 10;
let VAT = 0.25;
let total = `total: ${(preço * (1 + VAT)).toFixed(2)}`;
document.getElementById("demo05").innerHTML = total;


//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z