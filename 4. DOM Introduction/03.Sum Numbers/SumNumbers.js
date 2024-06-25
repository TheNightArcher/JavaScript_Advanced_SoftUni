function calc() {
    let element1 = document.getElementById('num1');
    let element2 = document.getElementById('num2');

    let number1 = Number(element1.value);
    let number2 = Number(element2.value);

    let sum = number1 + number2;
    let result = document.getElementById('sum')

    result.value = sum;
}
