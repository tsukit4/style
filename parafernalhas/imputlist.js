function verificar() {
    let valorSELECT = document.querySelector("select").value

    if (valorSELECT == 'desabilitado') {
        document.querySelector("input").disabled = true

        let pElemento = document.getElementById("mensagem")
        pElemento.innerHTML = "DESABILITADO"
        pElemento.style.color = "white"
        pElemento.style.backgroundColor = "red"

    } else {
        document.querySelector("input").disabled = false
        let pElemento = document.getElementById("mensagem")
        pElemento.innerHTML = ""
        pElemento.style.color = "black"
        pElemento.style.backgroundColor = "transparent"
    }

}