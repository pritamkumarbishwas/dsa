function removeDouplicates1(arr) {
    // Remove duplicates from arrays that are already in the array with the same name as the original array and then remove them from the original 

    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {  // O(N)
        if (!uniqueArr.includes(arr[i])) { // O(N)
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// second Approach 
function removeDouplicates2(arr) {
    let set = new Set();
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


function removeDouplicates3(arr) {
    arr.sort((a, b) => a - b);
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    
    // return arr.slice(0, j + 1);

    arr.length = j + 1;
    return arr;
}



const arr = [1, 2, 3, 4, 5, 3, 4, 5,];
console.log(removeDouplicates1(arr));
console.log(removeDouplicates2(arr));
console.log(removeDouplicates3(arr));