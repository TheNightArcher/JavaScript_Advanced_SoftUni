function addAndRemoveElements(input){
    let result= [];
    let number = 1;

    input.forEach(element => {
        if (element === "add"){
            result.push(number);
            number++;
        }else if (element === "remove") {
            result.pop();
            number++;
        }
    })

    if (result.length !== 0){
        result.forEach(element => console.log(element));
    }else {
        console.log("Empty")
    }
}


addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);

addAndRemoveElements(['remove',
    'remove',
    'remove']
);

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);