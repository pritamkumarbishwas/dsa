/*
printing Sub sequances whose sum is k

ex -

arr= [1,2,1];

sum=2; [1,1], [2]

*/

function sumSequence(ind, ds, s, sum, arr, n) {
    if (ind === n) {
        if (sum === s) {
            console.log(ds);
        }
        return;
    }

    ds.push(arr[ind]);
    sumSequence(ind + 1, ds, s + arr[ind], sum, arr, n);

    ds.pop();
    sumSequence(ind + 1, ds, s, sum, arr, n);
}


const arr = [1, 2, 1];
let n = arr.length;
let sum = 2;
let ds = [];

sumSequence(0, ds, 0, sum, arr, n);