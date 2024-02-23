// Criar e exibir uma variável:
let car = "Fiat";
document.getElementById("demo").innerHTML = car;

//DEMO2
// Criar um objeto:
const car2 = {type: "Fiat", model:"500", color: "Branco"};
// Mostrar alguns dados do objeto:
document.getElementById("demo2").innerHTML = "O tipo de carro é " + car2.type;

//DEMO3
// Criar um objeto:
const person = {PrimeiroNome:"Jonas", Sobrenome:"Santos", Idade: 35, CorDosOlhos:"Azul"};
// Mostrar alguns dados do objeto:
document.getElementById("demo3").innerHTML = person.PrimeiroNome + " tem " + person.Idade + " anos.";

//DEMO4
// Criar um objeto:
const person2 = {
    Nome: "Piter",
    Sobrenome: "Turguniev",
    Idade: 65,
    Olhos: "Azul"
};
// Mostrar alguns dados do objeto:
document.getElementById("demo4").innerHTML = person2.Nome + " tem " + person2.Idade + " Anos.";

//DEMO5
// Criar um objeto:
const person3 = {
    Nome: "Escanor",
    Sobrenome: "Williams",
    id: 5566,
    NomeCompleto: function() {
        return this.Nome + " " + this.Sobrenome;
    }
};
// Visualizar os dados do objeto:
document.getElementById("demo5").innerHTML = person3.NomeCompleto();

//DEMO6
// Criar um objeto:
const person4 = {
    Nome: "Monkey d.",
    Sobrenome: "Luffy",
    id: 5566,
    NomeCompleto: function() {
        return this.Nome + " " + this.Sobrenome;
    }
};
// Visualizar os dados do objeto:
document.getElementById("demo6").innerHTML = person4.NomeCompleto;


//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
