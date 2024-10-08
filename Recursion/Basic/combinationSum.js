/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique
 combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less
than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/
function findCombination(ind, target, candidate, ans, ds) {
    if (ind == candidate.length) {
        if (target == 0) {
            ans.push([...ds]);
        }
        return;
    }

    if (candidate[ind] <= target) {
        ds.push(candidate[ind]);

        findCombination(ind, target - candidate[ind], candidate, ans, ds);
        ds.pop();
    }

    findCombination(ind + 1, target, candidate, ans, ds);
}

function combinationSum(candidate, target) {
    let ans = [];
    let ds = [];
    findCombination(0, target, candidate, ans, ds);
    return ans;
}

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); // Output: [[2,2,3],[7]]
