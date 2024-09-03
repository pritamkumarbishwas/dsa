/* Print N to 1 

ex N=5 
output : 5 4 3 2 1

*/

function printNtoi(N){
    if(N<1){
        return ;
    }
    console.log(N);
    printNtoi(N-1);
}

const N=5;
printNtoi(N);