function secLargest1(arr) {
    let largest = -Infinity;
    let secLargest = largest;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] > secLargest && arr[i] < largest) {
            secLargest = arr[i];
        }
    }

    if (secLargest == -Infinity || largest == -Infinity) {
        return -1;
    }

    return secLargest;
}

//================= second approach ========================
function secLargest2(arr) {
    arr.sort((a, b) => a - b); // O(nlogn)

    let n = arr.length;

    let largest = arr[n - 1];
    let secLargest = -Infinity;
    for (let i = n - 2; i >= 0; i--) { // O(n)
        if (arr[i] !== largest) {
            secLargest = arr[i];
            break;
        }
    }
    return secLargest;
}

const arr = [12, 35, 35, 1, 10, 34, 34, 1];
console.log(secLargest1(arr));
console.log(secLargest2(arr));
