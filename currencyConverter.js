// Function that converts CURRENCY
const convCur = async (curr) => {
    const userInput = document.getElementById('val-input').value;

    const ratio = async () => {
        const response = await fetch('https://api.exchangeratesapi.io/latest')
        const responseBody = await response.json();
        return responseBody.rates[curr];
    }
    
    const ratioResult = await ratio();
    const result = (userInput/ratioResult);
    
    document.getElementById('result').textContent = `Value in dollar: ${result.toFixed(2)}`;
}






// // Function that converts BRL to DOL
// const convDol = async () => {
//     const userInput = document.getElementById('brl-input').value;
    
//     const ratio = async () => {
//         const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD')
//         const responseBody = await response.json();
//         return responseBody.rates['BRL'];
//     }
//     const ratioResult = await ratio();
//     const result = (userInput/ratioResult);
    
//     document.getElementById('result').textContent = `Value in dollar: ${result.toFixed(2)}`  ;
// }