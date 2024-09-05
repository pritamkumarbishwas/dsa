/*
Given a list arr of n integers, return sums of all subsets in it. Output sums can be printed in any order.

Examples:

Input: n = 2, arr[] = {2, 3}
Output: 0 2 3 5
Explanation: When no elements is taken then Sum = 0. When only 2 is taken then
Sum = 2. When only 3 is taken then Sum = 3. When element 2 and 3 are taken then Sum = 2+3 = 5.

*/

function findSubset(ind, sum, arr, n, subSet) {
    if (ind === n) {
        subSet.push(sum);
        return;
    }
    // pick the element
    findSubset(ind + 1, sum + arr[ind], arr, n, subSet);

    // Do-not pick the element
    findSubset(ind + 1, sum, arr, n, subSet);
}

function subSetSum(arr, n) {

    let subSet = [];
    findSubset(0, 0, arr, n, subSet);
    subSet.sort((a, b) => a - b);
    return subSet;
}

const arr = [2, 3];
let n = 2;

console.log(subSetSum(arr, n));
