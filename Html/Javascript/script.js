let display = document.getElementById('display');

function append(character) {
    display.value += character;
}

function deletar() {
    display.value = display.value.slice(0, -1);
}

function limpar(){
    document.getElementById("display").value = "";
}


function resultado() {
    try {
        if (display.value.includes('%')) {
            display.value = eval(display.value.replace('%','/100'));
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Erro';
    }
}
