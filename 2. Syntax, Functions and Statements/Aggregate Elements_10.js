function slove(array) {

    let sum = 0;
    let inversSum = 0;

    for (let i = 0; i < array.length; i++) {

        sum += array[i];

        inversSum += 1 / array[i];
    }

    console.log(sum);
    console.log(inversSum);
    console.log(array.join(''));
}

slove([1, 2, 3]);