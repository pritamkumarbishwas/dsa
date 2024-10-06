var isValid = function (s) {
    let stack = [];
    let brackets = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    for (let char of s) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            let poppedElements = stack.pop();
            if (brackets[poppedElements] != char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let s = "()";
console.log(isValid(s));// true
let s1 = "(){";
console.log(isValid(s1));// false