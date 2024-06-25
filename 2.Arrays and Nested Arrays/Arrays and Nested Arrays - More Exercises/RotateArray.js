function rotateArray(input,n){

    for (let i = 0; i < n; i++) {
        let number = input.pop();
        input.unshift(number)
    }

    console.log(input.join(" "));
}

rotateArray(['1',
        '2',
        '3',
        '4'],
    2
);