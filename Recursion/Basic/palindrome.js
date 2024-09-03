/*
check given string is palindrome or not
str= MADAM
output = true;

str=test
output= false

*/

// TC = O(n / 2) = O(n)
// SC = O(n / 2) = O(n)

function palindrome(i, str) {
    if (i >= str.length / 2) {
        return true;
    }

    if (str[i] !== str[str.length - i - 1]) {
        return false;
    }

    return palindrome(i + 1, str)
}

const str = "madamm";

console.log(palindrome(0, str));