class Stack {
    constructor() {
        this.stack = [];
    }
    // psuh element
    push(element) {
        // TC : O(1)
        // SC : O(1)
        this.stack.push(element);
    }

    // remove element
    pop() {
        // TC : O(1)
        // SC : O(1)
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.stack.pop();
    }

    //top element
    pick() {
        // TC : O(1)
        // SC : O(1)
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    // check empty
    isEmpty() {
        // TC : O(1)
        // SC : O(1)
        return this.stack.length === 0;
    }

    // get length
    size() {
        // TC : O(1)
        // SC : O(1)
        return this.stack.length;
    }

    // clear all element
    clear() {
        // TC : O(1)
        // SC : O(1)
        this.stack = [];
    }

}

const myStack = new Stack();
myStack.push(5)
myStack.push(6)
myStack.push(7)
myStack.push(8)


console.log("top element", myStack.pick());
console.log("size", myStack.size());
myStack.pop();
console.log("after pop", myStack.stack);
console.log("empyt", myStack.isEmpty());
console.log("clear", myStack.clear());
console.log("after clear ", myStack.stack);
