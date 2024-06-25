function constructionCrew(input) {
    let result = {
        weight: input.weight,
        experience: input.experience,
        levelOfHydrated: input.levelOfHydrated,
        dizziness: input.dizziness
        };
    if (result.dizziness) {
        result.levelOfHydrated = input.weight * input.experience * 0.1;
        result.dizziness = false;
    }
    return result;
}

console.log(constructionCrew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
));

console.log(constructionCrew({
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
));