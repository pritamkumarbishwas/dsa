/*
0 1 1 2 3 5 8 13 21 34 


*/

function fibonacci(N) {
    if (N < 1) {
        return 1;
    }
    return fibonacci(N - 1) + fibonacci(N - 2);
}
const N = 3;
console.log(fibonacci(N));