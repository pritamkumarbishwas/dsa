/*
0 1 1 2 3 5 8 13 21 34 

TC: O(2N) two the power of N
SC: O(N)

*/

function fibonacci(N) {
    if (N <= 1) {
        return N;
    }
    let last = fibonacci(N - 1);
    let secLast = fibonacci(N - 2);

    return last + secLast;
}
const N = 4;
console.log(fibonacci(N));