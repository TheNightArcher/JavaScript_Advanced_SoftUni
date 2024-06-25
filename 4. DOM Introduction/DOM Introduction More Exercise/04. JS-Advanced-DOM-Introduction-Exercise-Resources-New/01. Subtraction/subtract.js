function subtract() {
    let firstNumberValue = document.getElementById('firstNumber').value;
    let secondNumberValue = document.getElementById('secondNumber').value;

    let firstNumber = Number(firstNumberValue);
    let secondNumber= Number(secondNumberValue);

    let result = firstNumber - secondNumber;
    document.getElementById('result').textContent = result.toString();
}