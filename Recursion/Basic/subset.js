/*
Given an integer array nums that may contain duplicates, return all possible subsets 
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]


// TC= O(2N) two two the power N
// SC = O(2N)two two the power N
*/

function findSubSet(ind, nums, ans, ds) {
    ans.push([...ds]);

    for (let i = ind; i < nums.length; i++) {
        if (i !== ind && nums[i] === nums[i - 1]) {
            continue;
        }

        ds.push(nums[i]);
        findSubSet(i + 1, nums, ans, ds);
        ds.pop();
    }
}


function subset(nums) {
    let ans = [];
    let ds = [];
    nums.sort((a, b) => a - b);
    findSubSet(0, nums, ans, ds);
    return ans;
}

const nums = [1, 2, 3];
console.log(subset(nums));