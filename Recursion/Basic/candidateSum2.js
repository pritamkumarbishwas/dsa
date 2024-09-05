/*

Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[ [1,1,6],[1,2,5],[1,7],[2,6] ]
*/

function findCandidateSum(ind, target, candidate, ans, ds) {
    if (ind == candidate.length) {
        if (target == 0) {
            ans.push([...ds]);
        }
        return;
    }

    if (candidate[ind] <= target) {
        ds.push(candidate[ind]);

        findCandidateSum(ind + 1, target - candidate[ind], candidate, ans, ds);
        ds.pop();
    }

    findCandidateSum(ind + 1, target, candidate, ans, ds);
}

function candiateSum(candidate, target) {
    let ans = [];
    let ds = [];
    findCandidateSum(0, target, candidate, ans, ds);
    return ans;
}

const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(candiateSum(candidates, target));

// ============================Optimize===============================================
function findCandidateSum(ind, target, candidate, ans, ds) {
    if (target === 0) {
        ans.push([...ds]);
        return;
    }

    for (let i = ind; i < candidate.length; i++) {
        if (i > ind && candidate[i] == candidate[i - 1]) {
            continue;// Skip duplicates
        }

        if (candidate[i] > target) {
            break; // Early termination since the array is sorted
        }

        ds.push(candidate[i]);
        findCandidateSum(i + 1, target - candidate[i], candidate, ans, ds);
        ds.pop();
    }
}

function candiateSum(candidate, target) {
    let ans = [];
    let ds = [];
    candidate.sort((a, b) => a - b);
    findCandidateSum(0, target, candidate, ans, ds);
    return ans;
}

const candidates1 = [10, 1, 2, 7, 6, 1, 5];
const target1 = 8;
console.log(candiateSum(candidates1, target1));

