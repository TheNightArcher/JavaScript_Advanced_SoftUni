function GCDNumber(firstNumber, secondNumber){

    const firstArray = [];
    const secondArray = [];



    for (let i = 1; i <= firstNumber; i++) {
        if (firstNumber % i === 0){
            firstArray.push(firstNumber / i)
        }
    }
    firstArray.reverse()

    for (let i = 1; i <= secondNumber; i++) {
        if (secondNumber % i === 0){
            secondArray.push(secondNumber / i)
        }
    }
    secondArray.reverse()

    let greatestNumber = 0;


        for (let i = 0; i < secondArray.length; i++) {
            for (let j = 0; j < firstArray.length; j++) {
                if (firstArray[j] === secondArray[i]){
                    greatestNumber = secondArray[i]
                }
            }
        }


    console.log(greatestNumber)
}

// GCDNumber(15, 5)
GCDNumber(2154, 458)