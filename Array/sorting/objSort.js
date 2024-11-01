function objSort(obj) {
    return obj.sort((a, b) => a.name.localeCompare(b.name));
}

function objSort(obj) {
    let len = obj.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (obj[j].name > obj[j + 1].name) {
                [obj[j], obj[j + 1]] = [obj[j + 1], obj[j]];
            }
        }
    }
    return obj;
}

const obj = [
    { id: 1, name: 'pritam' },
    { id: 3, name: 'anil' },
    { id: 2, name: 'rahul' },
    { id: 4, name: 'Amit' }
]

console.log(objSort(obj));