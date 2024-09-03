/* factorial of N
N=5;
output : 5*4*3*2*1 =120

// TC: O(N)
// SC: O(N)
*/

function factorial(N) {
    if (N == 1) {
        return 1;
    }
    return N * factorial(N - 1);
}

const N = 5;
console.log(factorial(N));