/*
Sum of Just N numbers
ex N=5; 
output : 5+4+3+2+1 = 15

*/

// say 1
function sumOfNumber(N, sum) {
    if (N < 1) {
        console.log(sum);
        return;
    }
    sumOfNumber(N - 1, sum + N);
}

// way 2
function sumOfNumber(N) {
    if (N === 0) {
        return 0;
    }
    return N + sumOfNumber(N - 1);
}


const N = 5;
let sum = 0;
console.log(sumOfNumber(N, sum));