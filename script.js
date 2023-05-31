const formulario = document.getElementById('formulario').addEventListener('click', e => e.preventDefault());
const divcopyButton = document.getElementById('copyButton');
const imagenDiv = document.getElementById('imagen');
const textareaTwo = document.getElementById('secondTextarea');



const hideShowContent = () => {
    textareaTwo.style.display='block'
    divcopyButton.style.display = 'flex';
    imagenDiv.style.display = 'none';
};

const writeTextarea = (text) => {
    textareaTwo.innerHTML = text;

};

const copy = () => {
    let copiando = textareaTwo;
    copiando.select();
    document.execCommand('copy');

};
divcopyButton.addEventListener('click',copy)


function encriptar (texto = document.getElementById('textArea').value.toLowerCase()) {
    var textoCifrado = texto.replace(/e/igm, 'enter');
    textoCifrado = textoCifrado.replace(/i/igm, 'imes');
    textoCifrado = textoCifrado.replace(/a/igm, 'ai');
    textoCifrado = textoCifrado.replace(/o/igm, 'ober');
    textoCifrado = textoCifrado.replace(/u/igm, 'ufat');

    hideShowContent();
    writeTextarea(textoCifrado);
}

function desencriptar (texto = document.getElementById('textArea').value.toLowerCase()) {
    var textoCifrado = texto.replace(/enter/igm, 'e');
    textoCifrado = textoCifrado.replace(/imes/igm, 'i');
    textoCifrado = textoCifrado.replace(/ai/igm, 'a');
    textoCifrado = textoCifrado.replace(/ober/igm, 'o');
    textoCifrado = textoCifrado.replace(/ufat/igm, 'u');

    hideShowContent();
    writeTextarea(textoCifrado);
}