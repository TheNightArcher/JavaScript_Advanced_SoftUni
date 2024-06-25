function calculator(fruitType, weight, price){
    const totalWeight = weight / 1000;
    const totalPrice = totalWeight * price;



    console.log(`I need $${totalPrice.toFixed(2)} to buy ${totalWeight.toFixed(2)} kilograms ${fruitType}.`)
}

calculator('orange', 2500, 1.80)