let x = 10;
document.getElementById("demo").innerHTML = x;

//Atribuir o valor 5 a Q
let Q = 5;
//Atribuir o valor 2 a y
let y = 2;
//Atribuir o valor x + y a z
let z = Q + y;
//Visor z
document.getElementById("demo2").innerHTML = "A soma de Q + y é: " + z;

let a = 5;
let b = 2;
let c = a + b;
document.getElementById("demo3").innerHTML = c;

let d = 5;
let e = 2;
let f = d * e;
document.getElementById("demo4").innerHTML = f;

let g = 3;
let h = (100 + 50) * g;
document.getElementById("demo5").innerHTML = h;

var i = 10;
i += 5;
document.getElementById("demo6").innerHTML = i;

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("demo7").innerHTML = "A é menor do que B ? " + result;