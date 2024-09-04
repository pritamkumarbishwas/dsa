/*
longest Sub sequances whose sum is k

ex -

arr= [1,2,1];

sum=2; [1,1], [2]

*/
function longestSubsequenceWithSumK(ind, currentSum, targetSum, arr) {
    if (ind === arr.length) {
        return currentSum === targetSum ? 0 : 0;
    }

    // Include the current element
    let include = 1 + longestSubsequenceWithSumK(ind + 1, currentSum + arr[ind], targetSum, arr);

    // Exclude the current element
    let exclude = longestSubsequenceWithSumK(ind + 1, currentSum, targetSum, arr);

    return Math.max(include, exclude);
}

const arr = [1, 2, 1];
const targetSum = 2;

const maxLength = longestSubsequenceWithSumK(0, 0, targetSum, arr);

console.log(maxLength);