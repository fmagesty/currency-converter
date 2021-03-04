// Moeda de entrada
const clickDropdown1 = (dropButton1) => {
    // Troca o nome 'Moeda de entrada' pela moeda
    document.getElementById('entrada').innerHTML = document.getElementById(dropButton1).innerHTML;
    // Cria variavel pra moeda de entrada
    const entrada = document.getElementById(dropButton1).innerHTML;
}
// Moeda de saida
const clickDropdown2 = (dropButton2) => {
    // Troca o nome 'Moeda de entrada' pela moeda
    document.getElementById('saida').innerHTML = document.getElementById(dropButton2).innerHTML;
    // Cria variavel pra moeda de entrada
    const saida = document.getElementById(dropButton2).innerHTML;
}

// Function that converts CURRENCY
const convCur = async (curr) => {
    const inputVal = document.getElementById('val-input').value;

    const toRatio = async (curr2) => {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${saida.innerHTML}`)
        const responseBody = await response.json();
        return responseBody.rates[curr];
    }

    const ratioResult = await toRatio();
    let result = (inputVal/ratioResult);
    // Check to see if entrada == saida
    if (entrada.innerHTML == saida.innerHTML) {
        result = 'Ambas moedas são iguais. Tente uma moeda diferente.'
    }
    // Make const result show on the selected currency
    if (saida.innerHTML == 'BRL') {
        result = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    if (saida.innerHTML == 'USD') {
        result = result.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    if (saida.innerHTML == 'EUR') {
        result = result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }
    // Prints the final result
    document.getElementById('result').textContent = `${result}`;
}




