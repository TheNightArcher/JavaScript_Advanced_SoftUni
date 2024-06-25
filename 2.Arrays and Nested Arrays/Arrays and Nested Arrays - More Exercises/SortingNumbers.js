function sortArray(input) {
    let result = [];
    let sortedInput = input.sort((a, b) => a - b);

    while (sortedInput.length !== 0) {
        result.push(sortedInput.shift());
        result.push(sortedInput.pop());
    }

    return result;
}