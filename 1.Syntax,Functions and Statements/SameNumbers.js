
function assertNumbers(inputNumbers) {

    let stringNumber = inputNumbers.toString()
    let isSame = true
    let totalSum = 0;

    for (let i = 0; i <= stringNumber.length -1; i++) {

        let current = Number(stringNumber.charAt(i))
        let next = Number(stringNumber.charAt(i + 1))

        if (current !== next && i + 1 <= stringNumber.length - 1){
            isSame = false
        }

        totalSum += current
    }
    console.log(isSame)
    console.log(totalSum)
}

assertNumbers(2222222)
