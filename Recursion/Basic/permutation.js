/* permutation
input nums = [1, 2, 3];
output = [ [1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[3, 1, 2],[3, 2, 1]]
*/


function findPermutation(nums, ds, ans, visited) {
    if (ds.length === nums.length) {
        ans.push([...ds]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            ds.push(nums[i]);

            findPermutation(nums, ds, ans, visited);
            ds.pop();
            visited[i] = false;
        }
    }
}


function permutation(nums) {
    let ds = [];
    let ans = [];
    let visited = new Array(nums.length).fill(false);
    findPermutation(nums, ds, ans, visited);
    return ans;
}

const nums = [1, 2, 3];
console.log(permutation(nums));