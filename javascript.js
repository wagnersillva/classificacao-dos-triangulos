// CORES DOS TEMAS

function mudartema(x) {
    switch (x) {
        case 1:
            document.getElementById('Body').style.backgroundColor = "#000000";
            document.getElementById('Body').style.color = "#FFF600";
            document.getElementById('ladoa').style.backgroundColor="#000000";
            document.getElementById('ladoa').style.color = "#FFF600";
            document.getElementById('ladob').style.backgroundColor="#000000";
            document.getElementById('ladob').style.color = "#FFF600";
            document.getElementById('ladoc').style.backgroundColor="#000000";
            document.getElementById('ladoc').style.color = "#FFF600";
            document.getElementById('botao1').style.backgroundColor="#000000";
            document.getElementById('botao1').style.color = "#FFF600";
            document.getElementById('LimparBuscar').style.backgroundColor="#000000";
            document.getElementById('LimparBuscar').style.color = "#FFF600";
            document.getElementById('rodape').style.color = "#FFF600";
            break;
        case 2:
            document.getElementById('Body').style.backgroundColor = "#FAFAFA";
            document.getElementById('Body').style.color = "#0000f0";
            document.getElementById('ladoa').style.backgroundColor="#FAFAFA";
            document.getElementById('ladoa').style.color = "#0000f0";
            document.getElementById('ladob').style.backgroundColor="#FAFAFA";
            document.getElementById('ladob').style.color = "#0000f0";
            document.getElementById('ladoc').style.backgroundColor="#FAFAFA";
            document.getElementById('ladoc').style.color = "#0000f0";
            document.getElementById('botao1').style.backgroundColor="#FAFAFA";
            document.getElementById('botao1').style.color = "#0000f0";
            document.getElementById('LimparBuscar').style.backgroundColor="#FAFAFA";
            document.getElementById('LimparBuscar').style.color = "#0000f0";
            document.getElementById('rodape').style.color = "#0000f0";
            break;
        case 3:
            document.getElementById('Body').style.backgroundColor = "black";
            document.getElementById('Body').style.color = "#fff";
            document.getElementById('ladoa').style.backgroundColor="black";
            document.getElementById('ladoa').style.color = "#fff";
            document.getElementById('ladob').style.backgroundColor="black";
            document.getElementById('ladob').style.color = "#fff";
            document.getElementById('ladoc').style.backgroundColor="black";
            document.getElementById('ladoc').style.color = "#fff";
            document.getElementById('botao1').style.backgroundColor="black";
            document.getElementById('botao1').style.color = "#fff";
            document.getElementById('LimparBuscar').style.backgroundColor="black";
            document.getElementById('LimparBuscar').style.color = "#FFF600";
            document.getElementById('rodape').style.color = "#FFF600";
            break;
        case 4:
            document.getElementById('Body').style.backgroundColor = "#000000";
            document.getElementById('Body').style.color = "#BBFF00";
            document.getElementById('ladoa').style.backgroundColor="#000000";
            document.getElementById('ladoa').style.color = "#BBFF00";
            document.getElementById('ladob').style.backgroundColor="#000000";
            document.getElementById('ladob').style.color = "#BBFF00";
            document.getElementById('ladoc').style.backgroundColor="#000000";
            document.getElementById('ladoc').style.color = "#BBFF00";
            document.getElementById('botao1').style.backgroundColor="#000000";
            document.getElementById('botao1').style.color = "#BBFF00";
            document.getElementById('LimparBuscar').style.backgroundColor="#000000";
            document.getElementById('LimparBuscar').style.color = "#BBFF00";
            document.getElementById('rodape').style.color = "#BBFF00";
            break;
        case 5:
            document.getElementById('Body').style.backgroundColor = "#787828";
            document.getElementById('Body').style.color = "#000000";
            document.getElementById('ladoa').style.backgroundColor="#787828";
            document.getElementById('ladoa').style.color = "#000000";
            document.getElementById('ladob').style.backgroundColor="#787828";
            document.getElementById('ladob').style.color = "#000000";
            document.getElementById('ladoc').style.backgroundColor="#787828";
            document.getElementById('ladoc').style.color = "#000000";
            document.getElementById('botao1').style.backgroundColor="#787828";
            document.getElementById('botao1').style.color = "#000000";
            document.getElementById('LimparBuscar').style.backgroundColor="#787828";
            document.getElementById('LimparBuscar').style.color = "#000000";
            document.getElementById('rodape').style.color = "#000000";
            break;
        case 6:
            document.getElementById('Body').style.backgroundColor = "#787828";
            document.getElementById('Body').style.color = "#fff";
            document.getElementById('ladoa').style.backgroundColor="#787828";
            document.getElementById('ladoa').style.color = "#fff";
            document.getElementById('ladob').style.backgroundColor="#787828";
            document.getElementById('ladob').style.color = "#fff";
            document.getElementById('ladoc').style.backgroundColor="#787828";
            document.getElementById('ladoc').style.color = "#fff";
            document.getElementById('botao1').style.backgroundColor="#787828";
            document.getElementById('botao1').style.color = "#fff";
            document.getElementById('LimparBuscar').style.backgroundColor="#787828";
            document.getElementById('LimparBuscar').style.color = "#fff";
            document.getElementById('rodape').style.color = "#fff";
            break;
    }

}



// LIMPAR PESQUISA

function LimparBuscar() {

    document.getElementById('nomeTriangulo').innerHTML = "";
    // Motivo 
    document.getElementById('explicacao').innerHTML = "";
    // Lado 1 
    document.getElementById('lado1Resultado').innerHTML = ``;
    // Lado 2 
    document.getElementById('lado2Resultado').innerHTML = ``;
    // Lado 3 
    document.getElementById('lado3Resultado').innerHTML = ``;
    // botao para resetar 
    document.getElementById('LimparBuscar').style.display = "none";
    // limpando input's
    document.getElementById('ladoa').value = "";
    document.getElementById('ladob').value = "";
    document.getElementById('ladoc').value = "";


}

// NOME DO TRIANGULO

function NomeTriangulo() {
    var a = Number(document.getElementById('ladoa').value);
    var b = Number(document.getElementById('ladob').value);
    var c = Number(document.getElementById('ladoc').value);
    // verificando se nenhuma informação está faltando
    if ((a === "") || (b === "") || (c === "")) {
        alert('Nenhum lado pode ser nulo, zero ou negativo! Por favor, verifique as informações e preencha novamente.')
        document.getElementById('nomeTriangulo').innerHTML = "Nenhum lado pode ser nulo, zero ou negativo! Por favor, verifique as informações e preencha novamente.";
    }
    // verificando se algum lado está negativo
    else if ((a <= 0) || (b <= 0) || (c <= 0)) {
        alert("Nenhum lado pode ser nulo, zero ou negativo! Por favor, verifique as informações e preencha novamente.")
        document.getElementById('nomeTriangulo').innerHTML = "Nenhum lado pode ser nulo, zero ou negativo! Por favor, verifique as informações e preencha novamente.";
    }
    // verificando se as informações satisfazem as condições para existencia de um triangulo
    else if (((a + b) >= c) & ((a + c) >= b) & ((c + b) >= a)) {

        // agora, erificar qual o tipo de triangulo
        if ((a == b) & (b == c)) {
            // nome do triangulo 
            document.getElementById('nomeTriangulo').innerHTML = "O triangulo é: Equilátero.";
            // Motivo 
            document.getElementById('explicacao').innerHTML = "Motivo: Todos os lados são iguais.";
            // Lado 1 
            document.getElementById('lado1Resultado').innerHTML = `Lado a: ${a}`;
            // Lado 2 
            document.getElementById('lado2Resultado').innerHTML = `Lado b: ${b}`;
            // Lado 3 
            document.getElementById('lado3Resultado').innerHTML = `Lado c: ${c}`;
            document.getElementById('LimparBuscar').style.display = "";




        } else if (((a == b) & (b != c)) || ((a == c) & (c != b)) || ((b == c) & (c != a))) {
            // nome do triangulo 
            document.getElementById('nomeTriangulo').innerHTML = "O triangulo é: Isósceles.";
            // Motivo 
            document.getElementById('explicacao').innerHTML = "Motivo: Dois lados são iguais.";
            // Lado 1 
            document.getElementById('lado1Resultado').innerHTML = `Lado a: ${a}`;
            // Lado 2 
            document.getElementById('lado2Resultado').innerHTML = `Lado b: ${b}`;
            // Lado 3 
            document.getElementById('lado3Resultado').innerHTML = `Lado c: ${c}`;
            // botao para resetar 
            document.getElementById('LimparBuscar').style.display = "";


        } else {
            // nome do triangulo 
            document.getElementById('nomeTriangulo').innerHTML = "O triangulo é: Escaleno.";
            // Motivo 
            document.getElementById('explicacao').innerHTML = "Motivo: Todos os lados são diferentes.";
            // Lado 1 
            document.getElementById('lado1Resultado').innerHTML = `Lado a: ${a}`;
            // Lado 2 
            document.getElementById('lado2Resultado').innerHTML = `Lado b: ${b}`;
            // Lado 3 
            document.getElementById('lado3Resultado').innerHTML = `Lado c: ${c}`;
            // botao para resetar 
            document.getElementById('LimparBuscar').style.display = "";


        }

    } else {
        document.getElementById('nomeTriangulo').innerHTML = "Os comprimentos não satisfazem as condições de existência de um triangulo.";
        // Motivo 
        document.getElementById('explicacao').innerHTML = "";
        // Lado 1 
        document.getElementById('lado1Resultado').innerHTML = ``;
        // Lado 2 
        document.getElementById('lado2Resultado').innerHTML = ``;
        // Lado 3 
        document.getElementById('lado3Resultado').innerHTML = ``;


    }

}

// DATA ATUAL FOOTER
function iniciarpagina(){
    let novadata = new Date;
    let novoano = novadata.getFullYear();
    document.getElementById('rodape').innerHTML = `&copy; Copyright Koala Dev ${novoano} `;
}