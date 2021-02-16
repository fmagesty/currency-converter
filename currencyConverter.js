// Function that converts BRL to DOL
function convDol(n) {
    n = document.getElementById('brl-input').value;
    n /= 5.37;
    n = n.toFixed(2); // round the value with 2 decimals
    document.getElementById('result').textContent = 'Value in dollar: $' + n; //displays the result
    return n;
}



