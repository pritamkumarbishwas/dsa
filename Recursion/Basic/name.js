// !. Print Name N times using Recursion


function printName(i, N) {
    if (i > N) {
        return;
    }
    console.log("Name"+i);
    printName(i+1,N);
}

const N = 5;
let i = 1;
printName(i, N);