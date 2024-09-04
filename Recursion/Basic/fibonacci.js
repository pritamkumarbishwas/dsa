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


//==========================================
// TC : O(N); With the help of memoization, each Fibonacci number is calculated only once, leading to linear time complexity.
// SC : O(N) ; The space complexity includes the space required to store the memo object and the recursion stack.
//  The depth of recursion is N, and the memoization array also has N entries, leading to O(N) space complexity.

function fibonacci(N, memo = {}) {
    if (N <= 1) {
        return N;
    }

    if (memo[N]) {
        return memo[N];
    }

    return memo[N] = fibonacci(N - 1, memo) + fibonacci(N - 2, memo);
}

const N = 4;
console.log(fibonacci(N));