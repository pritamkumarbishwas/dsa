class Stack {
    constructor() {
        this.stack = [];
    }
    // Adds an element to the top of the stack.
    push(element) {
        // TC : O(1)
        // SC : O(1)
        this.stack.push(element);
    }

    // Removes the element from the top of the stack.
    pop() {
        // TC : O(1)
        // SC : O(1)
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.stack.pop();
    }

    // Returns the element at the top of the stack without removing it.
    pick() {
        // TC : O(1)
        // SC : O(1)
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    //Checks if the stack is empty.
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
