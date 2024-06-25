function townsToJSON(input) {
    let towns = []
    for (let i = 1; i < input.length; i++) {
        let [empty, town, latitude, longitude] = input[i].split('|').map(x => x.trim())
        let townObj = {
            Town: town,
            Latitude: Math.round(Number(latitude) * 100) / 100,
            Longitude: Math.round(Number(longitude) * 100) / 100
        }
        towns.push(townObj)
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);