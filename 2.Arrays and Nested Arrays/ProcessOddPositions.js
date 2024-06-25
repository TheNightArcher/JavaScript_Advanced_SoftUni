function processOddPositions(input){
    let result = input.filter((value, index) => index % 2 !== 0).map(value => value * 2).reverse();
    return result.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));