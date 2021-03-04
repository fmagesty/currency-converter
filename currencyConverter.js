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
    const result = (inputVal/ratioResult).toFixed(2);
    console.log(result.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })) // NOT WORKING FOR SOME REASON
    document.getElementById('result').textContent = `$${result}`;
}



/// KEEPING THIS JUST IN CASE XD
// // Function that converts CURRENCY
// const convCur = async (curr) => {
//     const inputVal = document.getElementById('val-input').value;

//     const toRatio = async () => {
//         const response = await fetch('https://api.exchangeratesapi.io/latest')
//         const responseBody = await response.json();
//         return responseBody.rates[curr];
//     }
    
//     const ratioResult = await toRatio();
//     const result = (inputVal/ratioResult);
//     document.getElementById('result').textContent = `$${result.toFixed(2)}`;
// }




