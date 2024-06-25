function sortArrayBy2Criteria(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}

sortArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
);

sortArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

sortArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);