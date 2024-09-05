/* permutation
input nums = [1, 2, 3];
output = [ [1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[3, 1, 2],[3, 2, 1]]
*/


// Time Complexity: O(n * n!)
// Space Complexity: O(n * n!)


function findPermutation(ind, nums, ans) {
    if (ind == nums.length) {
        ans.push([...nums]); // Push a copy of the current permutation   //  O(n)
        return;
    }

    for (let i = ind; i < nums.length; i++) {
        [nums[ind], nums[i]] = [nums[i], nums[ind]]; // Swap to explore new permutation
        findPermutation(ind + 1, nums, ans); // Recurse with the next index
        [nums[ind], nums[i]] = [nums[i], nums[ind]]; // Swap back to restore original order (backtracking)
    }
}


function permutation(nums) {
    let ans = [];
    findPermutation(0, nums, ans);
    return ans;
}

const nums = [1, 2, 3];
console.log(permutation(nums));