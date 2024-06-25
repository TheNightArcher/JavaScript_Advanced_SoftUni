function biggestElement(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;

    matrix.forEach(row => row.forEach(col => biggest = Math.max(biggest, col)));

    return biggest;
}

