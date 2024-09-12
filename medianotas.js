const prompt = require("prompt-sync")()

let x = parseFloat(prompt("Digite a primeira nota: "))
let y = parseFloat(prompt("Digite a segunda nota: "))
let z = parseFloat(prompt("Digite a terceira nota: "))
let a = parseFloat(prompt("Digite a quarta nota: "))

let media = (x + y + z + a)/4

console.log("Sua mendia é: "+media)

if (media < 7) {
    console.log("Voce está Reprovado!")
} else {
    console.log("Voce está Aprovado")
}