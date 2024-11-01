
function search(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target > arr[mid]) {
            return search(arr, target, mid + 1, end)
        } else if (target < arr[mid]) {
            return search(arr, target, start, mid - 1);
        } else {
            return mid;
        }
    }
    
    return -1;
}

// TC : O(logn)
// SC : O(logn)

const arr = [-1, 0, 2, 3, 4, 5, 6, 9, 12, 34];
const target = 34;
const start = 0;
const end = arr.length - 1;
const result = search(arr, target, start, end);
console.log(result)