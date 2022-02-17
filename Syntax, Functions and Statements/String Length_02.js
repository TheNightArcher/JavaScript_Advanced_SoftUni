function slove(firstName,secondName,thirdName){

    let sumOfChars = firstName.length + secondName.length + thirdName.length;
    let avgLength = Math.floor(sumOfChars / 3);

    console.log(sumOfChars);
    console.log(avgLength);
}

slove('Galin','Kaloqn','Lilya');
slove('Galin','Java','BMW');