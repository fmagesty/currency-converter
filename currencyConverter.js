// Function that converts BRL to DOL
function convDol(n) {
    n = document.getElementById('brl-input').value;
    n /= 5.37;
    // n = Math.round(n); // if needed to round the value
    document.getElementById('result').textContent = 'Value in dollar: $' + n;
    return n;
}



