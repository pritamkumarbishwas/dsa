function subArray(arr) {
    let allSubarrays = [];
    
    for (let i = 0; i < arr.length; i++) {
        let subArray = [];
        
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr[j]);
            allSubarrays.push([...subArray]); 
        }
    }
    
    return allSubarrays;
}

const arr = [1, 2, 3, 4, 5, 6];
const res = subArray(arr);
console.log(res);
