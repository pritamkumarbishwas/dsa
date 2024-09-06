/*

*
**
***
****
*****
*/

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += "*";
    }
    console.log(str);
}

console.log("=======================================");
/*

1
22
333
4444
55555
*/

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += i + 1;
    }
    console.log(str);
}

console.log("=======================================");
/*

A
BB
CCC
DDDD
EEEEE

*/

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += String.fromCharCode(65 + i);
    }
    console.log(str);
}

console.log("=======================================");

/*

1
12
123
1234
12345

*/
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 1; j <= i + 1; j++) {
        str += j;
    }
    console.log(str);
}

console.log("=======================================");

/*

1
23
456
78910

*/
let num = 1;
for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += num;
        num++;
    }
    str += " ";
    console.log(str);
}


console.log("=======================================");

/*

1111
 222
  33
   4

*/
let n = 4;
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += " ";
    }

    for (let j = 0; j < n - i; j++) {
        str += i + 1;
    }
    console.log(str);
}



console.log("=======================================");

/*
   1     
  121    
 12321 
1234321

explain :  break in tow

i=0  ---1   ---
i=1  --12   1--
i=2  -123   21-
i=3  1234   321

1. paint space ( n-i-1) => " "
2. j loop 1 to i+1 =>j
3. j loop  i to 1 => j

*/

for (let i = 0; i < 4; i++) {
    let str = "";
    // Space (n-i-1)
    for (let j = 0; j < n - i - 1; j++) {
        str += " ";
    }

    // nums 1 : i+1
    for (let j = 1; j <= i + 1; j++) {
        str += j;
    }

    // // nums 2 
    for (let j = i; j >= 1; j--) {
        str += j;
    }

    console.log(str);
}


console.log("=======================================");

/*
     ---*---
     --*-*--
     -*---*-
     *-----*
     -*---*-
     --*-*--
     ---*---

     explain :  step 1
     l=0; - - - * - - -
     l=1; - - * - * - -
     l=2; - * - - - * -
     l=4; * - - - - - *

    1. j loop 0 to (n-i-1) => " "
        after loop print * 
    2.  if i!==0 then j loop 0 to (2*i-1) => " "
        after loop print * 
   

    step  : 2 for Bottom

    i=0; - * - - - * -
    l=1; - - * - * - -
    i=2; - - - * - - -

  
*/
// Top half of the diamond

let m = 4;

for (let i = 0; i < m; i++) {
    let str = "";

    for (let j = 0; j < m - i - 1; j++) {
        str += " ";
    }

    str += "*";

    if (i != 0) {
        for (let j = 0; j < 2 * i - 1; j++) {
            str += " ";
        }
        str += "*";
    }

    console.log(str);
}


// Bottom half of the diamond
for (let i = m - 2; i >= 0; i--) {
    let str = "";

    // Add leading spaces
    for (let j = 0; j < m - i - 1; j++) {
        str += " ";
    }

    // Add the first star
    str += "*";

    // Add spaces between stars
    if (i != 0) {
        for (let j = 0; j < 2 * i - 1; j++) {
            str += " ";
        }
        // Add the second star
        
        str += "*";
    }

    console.log(str);
}