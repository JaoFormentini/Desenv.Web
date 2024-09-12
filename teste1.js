//Se quiser rodar no terminal tira o coment desse linha abaixo // Porem ta bugado, nao sei porque.

//const prompt = require("prompt-sync")();

let y = parseFloat(prompt("Digite um numero: "));
let z = parseFloat(prompt("Digite outro numero: "));

let x = parseInt(prompt("Qual operaçao voce quer fazer ?\n 1 - Somar. \n 2 - Subtrair. \n 3 - Multiplicação \n 4 - Divisão \n"));

switch (x) {
    case 1:
        total = y+z;
        alert(total);
        break;
    
    case 2:
        total = y-z;
        alert(total);
        break;
    
    case 3:
        total = y*z;
        alert(total);
        break;

    case 4:
        total = y/z;
        alert(total);
        break;

    default:
        alert("Opçao invalida finalizando programa")
        break;
}