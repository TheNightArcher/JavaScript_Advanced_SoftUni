function printEveryNElement(input, n){
    let result = [];

    for (let i = 0; i < input.length;) {
        let element = input[i];
        result.push(element);
        i += n;
    }

    return result;
}

console.log(printEveryNElement(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));