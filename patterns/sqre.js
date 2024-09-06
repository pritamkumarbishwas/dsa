
/*
****
****
****
****

*/
for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < 4; j++) {
        str += "*"
    }
    console.log(str);
}


console.log("=======================================");
/*
1234
1234
1234
1234

*/

for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < 4; j++) {
        str += j + 1;
    }
    console.log(str);
}

console.log("=======================================");
/*
123
456
789

*/
let num = 1;
for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
        str += num;
        num++;
    }
    console.log(str);
}

console.log("=======================================");

/*
ABC
DEF
GHI
*/

let char = 0;
for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < 4; j++) {
        str += String.fromCharCode(65 + char);
        char++;
    }
    console.log(str);
}