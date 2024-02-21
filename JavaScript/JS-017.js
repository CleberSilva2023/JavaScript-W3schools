let a = 16 + "Volvo";
document.getElementById("demo").innerHTML = a;

let b = "Volvo" + 16;
document.getElementById("demo2").innerHTML = b;

let c = 16 + 4 + "Volvo";
document.getElementById("demo3").innerHTML = c;

let d = "Volvo" + 16 + 4;
document.getElementById("demo4").innerHTML = d;

let e;        // Agora e é indefinido
e = 5;        // Agora e é um Número   
e = "Jonas";  // Agora e é uma String
document.getElementById("demo5").innerHTML = e;

let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
document.getElementById("demo6").innerHTML = carName1 + "<br>" + carName2;

let answer1 = "Está tudo bem";
let answer2 = "Ele chama-se 'Joãozinho'";
let answer3 = 'Ele chama-se "Johnny"';
document.getElementById("demo7").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

let f1 = 34.00;
let f2 = 34;
let f3 = 3.14;
document.getElementById("demo8").innerHTML = f1 + "<br>" + f2 + "<br>" + f3;

let g = 123e5;
let h = 123e-5;
document.getElementById("demo9").innerHTML = g + "<br>" + h;

let i = BigInt("123456789012345678901234567890");
document.getElementById("demo10").innerHTML = i;

let j = 5;
let k = 5;
let l = 6;
document.getElementById("demo11").innerHTML = (j == k) + "<br>" + (j == l);

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo12").innerHTML = cars[0];

const person = {
    firstName : "Jonas",
    lastName  : "Silva",
    age     : 50,
    eyeColor  : "blue"
  };
  
  document.getElementById("demo13").innerHTML =
  person.firstName + " tem " + person.age + " anos de idade.";

  document.getElementById("demo14").innerHTML = typeof "" + "<br>" +
  typeof "Jonas" + "<br>" +
  typeof "Jonas Silva";

  document.getElementById("demo15").innerHTML = 
  typeof 0 + "<br>" + 
  typeof 314 + "<br>" +
  typeof 3.14 + "<br>" +
  typeof (3) + "<br>" +
  typeof (3 + 4);

  let car;
  document.getElementById("demo16").innerHTML = car + "<br>" + typeof car;

  let car2 = "Volvo";
  car2 = undefined;
  document.getElementById("demo17").innerHTML = car2 + "<br>" + typeof car2;

  let car3 = "";
  document.getElementById("demo18").innerHTML = "O valor é: " +
  car3 + "<br>" + "O tipo é: " + typeof car3; 

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z