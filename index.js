const quantTentativas = parseInt(window.prompt('Quantas tentativas você quer utilizar?'))
const quantCampos = 5
const botoesFuncoes = ['resetar', 'confirmar', 'apagar']
const letras = ['Q', 'W', 'E', 'R', 'T', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'I', 'J', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'T', 'Q', 'W', 'E', 'R', 'T', ]

window.onload = function() {
    iniciar()
}

function iniciar() {
    for (let t = 0; t < quantTentativas; t++) {
        let tentativa = document.createElement("div")
        tentativa.className = `linha${t}`
        document.querySelector('.linhasTentativas').appendChild(tentativa);
        for (let c = 0; c < quantCampos; c++) {
            let campo = document.createElement("input");
            campo.type = 'text'
            campo.className = "inputValor"
            campo.maxLength = 1
            campo.disabled = true
            campo.id = `linha${t}` + `campo${c}`;
            campo.innerText = "P";
            document.querySelector(`.linha${t}`).appendChild(campo);
        }
    }
    for (let l = 0; l < letras.length; l++) {
            let letra = document.createElement("input");
            letra.type = 'button'
            letra.value = letras[l]
            letra.className = "letraTeclado"
            letra.id = letras[l];
            document.querySelector(`.botoesTeclado`).appendChild(letra);        
    }
    
}
