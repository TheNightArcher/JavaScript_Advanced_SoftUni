function diagonalSum(input){
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        mainDiagonal += input[i][i];
        secondaryDiagonal += input[i][input.length - 1 - i];
    }
    result.push(mainDiagonal);
    result.push(secondaryDiagonal);
    console.log(result.join(' '));
}

diagonalSum([[20, 40],  [10, 60]]);