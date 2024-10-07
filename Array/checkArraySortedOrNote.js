
function checkSorted(arr) {
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }
    return count <= 1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(checkSorted(arr));
