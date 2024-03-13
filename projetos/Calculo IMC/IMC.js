
const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById("nm").value;
    var altura = document.getElementById("altura").value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById("resultado");

    if (altura >=90){
        altura = altura/100
        if (nome !== '' && altura !== '' && peso !== '') {
            const valorIMC = (peso / (altura * altura)).toFixed(1);
    
            let classificassao = "";
    
            if (valorIMC <18.5) {
                classificassao = "abaixo do peso."
            }else if (valorIMC < 25) {
                classificassao = "com peso ideal. Parabéns!";
            } else if (valorIMC < 30) {
                classificassao = "levemente acima do peso.";
            } else if(valorIMC < 35) { 
                classificassao = "obesidade grau I";
            } else if(valorIMC < 40) { 
                classificassao = "obesidade grau II";
            } else {
                classificassao = "com obesidade grau III. Cuidado!"
            }
    
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificassao}`;
    
        }else {
            resultado.textContent = 'Preencha todos os campos seu MERDA!';
        }
    }else{
        if (nome !== '' && altura !== '' && peso !== '') {
            const valorIMC = (peso / (altura * altura)).toFixed(1);
    
            let classificassao = "";
    
            if (valorIMC <18.5) {
                classificassao = "abaixo do peso."
            }else if (valorIMC < 25) {
                classificassao = "com peso ideal. Parabéns!";
            } else if (valorIMC < 30) {
                classificassao = "levemente acima do peso.";
            } else if(valorIMC < 35) { 
                classificassao = "obesidade grau I";
            } else if(valorIMC < 40) { 
                classificassao = "obesidade grau II";
            } else {
                classificassao = "com obesidade grau III. Cuidado!"
            }
    
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificassao}`;
    
        }else {
            resultado.textContent = 'Preencha todos os campos seu MERDA!';
        }
    }
}

calcular.addEventListener('click', imc);