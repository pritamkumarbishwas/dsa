function search(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target > arr[mid]) {
            start = mid + 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// TC : O(logn)
// SC : O(1)

const arr = [-1, 0, 2, 3, 4, 5, 9, 12];
const target =15;
const result = search(arr, target);
console.log(result);