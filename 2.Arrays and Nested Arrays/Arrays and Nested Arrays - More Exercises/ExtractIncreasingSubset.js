function extractIncreasingSubset(input) {
    return input.reduce((acc, curr) => {
        let lastElement = acc[acc.length - 1];

        if (curr >= lastElement || lastElement === undefined) {
            acc.push(curr);
        }

        return acc;
    }, []);
}

extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);