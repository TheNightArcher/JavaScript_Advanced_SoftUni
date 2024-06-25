function lowestPriceInCities(input){
    let result = {};
    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');
        price = Number(price);
        if (!result[product]) {
            result[product] = {town, price};
        } else {
            if (result[product].price > price) {
                result[product] = {town, price};
            }
        }
    }
    let output = [];
    for (const key in result) {
        output.push(`${key} -> ${result[key].price} (${result[key].town})`);
    }
    return output.join('\n');
}

console.log(lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));
