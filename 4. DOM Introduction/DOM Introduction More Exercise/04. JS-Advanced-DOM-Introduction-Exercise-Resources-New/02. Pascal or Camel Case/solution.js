function solve() {
    let input = document.getElementById('text').value.toLowerCase().split(' ');
    let result = '';
    let command = document.getElementById('naming-convention').value;

    if (command === 'Camel Case') {
        result += input[0];
        for (let i = 1; i < input.length; i++) {
            result += input[i][0].toUpperCase() + input[i].slice(1);
        }
    } else if (command === 'Pascal Case') {
        for (let i = 0; i < input.length; i++) {
            result += input[i][0].toUpperCase() + input[i].slice(1);
        }
    } else {
        result = 'Error!';
    }

    document.getElementById('result').textContent = result;
}