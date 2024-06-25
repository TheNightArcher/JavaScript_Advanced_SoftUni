function listOfNames(input) {
    let result = input.sort((a, b) => a.localeCompare(b));
    result.forEach((element, index) => console.log(`${index + 1}.${element}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);