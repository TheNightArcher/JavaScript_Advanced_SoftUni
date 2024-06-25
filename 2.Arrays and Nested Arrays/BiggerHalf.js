
function biggerHalf(input){

    let rightHalf = input.length / 2;

    let result = input.sort((a, b) => a - b).slice(rightHalf);
    return result;
}
