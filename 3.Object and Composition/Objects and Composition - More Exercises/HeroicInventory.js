function heroicInventory(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        input[i] = {name, level, items};
        result.push(input[i]);
    }
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));