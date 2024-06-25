//Write a function that calculate first and last element in array and return sum of them.
function sumFirstLast(input){
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);
    let sum = firstElement + lastElement;
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);