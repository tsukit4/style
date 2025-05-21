function imc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        if (valorIMC < 18.5) {
            tipoIMC = 'abaixo do peso'

        } else if (valorIMC < 25) {
            tipoIMC = 'peso ideal'

        } else if (valorIMC < 30) {
            tipoIMC = 'um pouco acima do peso'

        } else if (valorIMC < 35) {
            tipoIMC = 'obesidade grau1'

        } else if (valorIMC < 40) {
            tipoIMC = 'obesidade grau 2'

        } else {
            tipoIMC = 'obesidade grau 3'
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está com ${tipoIMC}`


    } else {
        resultado.innerHTML = "preencha todos os campos amiginho"
    }

}

