// Print 1 to N 
//  ex : N=5 output : 1 2 3 4 5

function print1ToN(i,N){
    if(i>N){
        return;
    }
    console.log(i);
    print1ToN(i+1,N);
}



const N=5;
let i=1;
print1ToN(i,N);