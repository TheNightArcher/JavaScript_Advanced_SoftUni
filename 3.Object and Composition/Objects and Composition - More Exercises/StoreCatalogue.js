function storeCatalogue(input) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');
        price = Number(price);
        let firstLetter = product[0];
        if (!result[firstLetter]) {
            result[firstLetter] = {};
        }
        result[firstLetter][product] = price;
    }
    let output = [];
    let sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        let products = Object.entries(result[key]).sort((a, b) => a[0].localeCompare(b[0]));
        output.push(key);
        for (const [product, price] of products) {
            output.push(`  ${product}: ${price}`);
        }
    }
    return output.join('\n');
}

console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));