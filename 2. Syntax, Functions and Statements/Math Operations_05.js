function slove(num1,num2,opeartor){

    let result;

    switch(opeartor){

        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' : result = num1 / num2; break;
        case '%' : result = num1 % num2; break;
        case '**' : result = num1 ** num2; break;

    }

    console.log(result);
}

slove(2,3,'**');