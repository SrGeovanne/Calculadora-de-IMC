
const calcular = document.getElementById("Calcular");


function imc() {

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome.value !== "" && altura !== "" && peso !== "") {
        const valorImc = (peso / (altura * altura)).toFixed(2);
        resultado.textContent = valorImc;

        let classificacao = "";
        if (valorImc < 18.5) {
            classificacao = "vc esta abaixo do peso";

        } else if (valorImc < 25) {
            classificacao = "vc esta com peso ideal parabens"
        } else if (valorImc < 30) {
            classificacao = "vc esta acima do peso ideal T_T"

        } else if (valorImc < 35) {
            classificacao = "vc esta acima do peso ideal T_T grau 1"

        } else if (valorImc < 40) {
            classificacao = "vc esta acima do peso ideal T_T grau 2"

        } else {
            classificacao = "vc esta acima do peso ideal T_T grau 3 vai fazer exercícios"

        }
        resultado.textContent = `${nome} seu IMC ${valorImc} e vc esta ${classificacao}`



    } else {
        resultado.textContent = "preencha todos os campos!!"
    }



}

calcular.addEventListener('click', imc);