/* 
reverse Array
array=[2, 3, 4, 5, 6, 7, 9, 8,]
output : [8, 9, 7, 6,5, 4, 3, 2]

*/

function reverse(l, r, arr) {
    if (l >= r) {
        return;
    }

    [arr[l], arr[r]] = [arr[r], arr[l]];
    reverse(l + 1, r - 1, arr);
}

const arr = [2, 3, 4, 5, 6, 7, 9, 8]
const left = 0;
const right = arr.length - 1;
reverse(left, right, arr);
console.log(arr);


// way 2=======================================================

function rev(i, arr, n) {
    if (i >= n / 2) {
        return;
    }

    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
    rev(i + 1, arr, n);

}

const arrs = [2, 3, 4, 5, 6, 7, 9, 8]
const i = 0;
const n = arrs.length;
rev(i, arrs, n);
console.log(arrs);