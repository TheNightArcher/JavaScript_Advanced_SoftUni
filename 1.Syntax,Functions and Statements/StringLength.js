function printLength(string, string2,string3){

    let length = string.toString().length;
    let length2 = string2.toString().length;
    let length3 = string3.toString().length;

    let totalSum = length + length2 + length3;

    let averageSum = Math.floor(totalSum/ 3);


    console.log(totalSum)
    console.log(averageSum)
}

printLength('chocolate', 'ice cream', 'cake')