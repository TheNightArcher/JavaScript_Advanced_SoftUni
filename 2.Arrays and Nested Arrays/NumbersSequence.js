function printNumbers(n,k){
    const result = [];
    result.push(1);

    const finalResult = result.slice();

    for (let i = 1; i < n; i++) {
        let currentSum = 0;

        for (let j = 0; j < k; j++) {
            if (result[j] === undefined){

            }else {
                currentSum += result[j];
            }
        }

        finalResult.push(currentSum);
        result.push(currentSum);
        if (result.length > k){
            result.shift();
        }
    }

    console.log(finalResult);
}

printNumbers(8, 2)