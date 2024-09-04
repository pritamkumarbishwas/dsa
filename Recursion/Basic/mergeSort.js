/* Merge Sort
// Note: Devide and merge
arr = [3, 1, 2, 4, 1, 5, 2, 6, 4]
explain:
   [3, 1, 2, 4, 1]            [5, 2, 6, 4]
 [3, 1, 2]      [4, 1]          [5,2]    [6,4]
[3,1]   [2]     [4] [1]        [5] [2]  [6][4]
[3] [1]

*/

function mergeSort(arr, low, high) {
    function merge(arr, low, mid, high) {
        let left = low;
        let right = mid + 1;
        let temp = [];

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    if (low >= high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

}


const arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
let low = 0;
let high = arr.length - 1;

mergeSort(arr, low, high);
console.log(arr);