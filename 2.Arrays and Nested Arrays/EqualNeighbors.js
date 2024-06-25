function equalNeighbors(matrix) {
    let pairs = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        let currentRow = matrix[row];
        let nextRow = matrix[row + 1];
        for (let col = 0; col < currentRow.length; col++) {
            if (currentRow[col] === nextRow[col]) {
                pairs++;
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let col = 0; col < currentRow.length - 1; col++) {
            if (currentRow[col] === currentRow[col + 1]) {
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(equalNeighbors([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]));


