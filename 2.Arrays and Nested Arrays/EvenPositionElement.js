function evenElement(input){
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0){
            result.push(input[i]);
        }
    }

    let finalResult = result.join(' ');
    console.log(finalResult);
}

evenElement(['20', '30', '40', '50', '60']);