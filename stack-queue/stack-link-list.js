// Class to define a node in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class implemented using linked list
class Stack {
    constructor() {
        this.top = null; // Points to the top of the stack
        this.size = 0;   // Tracks the size of the stack
    }

    // Push a new element to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode; // If stack is empty, the new node becomes the top
        } else {
            newNode.next = this.top; // Link the new node to the current top
            this.top = newNode;      // Update top to the new node
        }
        this.size++;
    }

    // Remove and return the element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return null; // If stack is empty, return null
        }
        const removedNode = this.top;
        this.top = this.top.next; // Move the top pointer to the next node
        this.size--;
        return removedNode.value; // Return the value of the removed node
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.value; // Return the value of the top node
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the stack
    getSize() {
        return this.size;
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek());  // Output: 30
console.log("Stack size:", stack.getSize()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Top element after pop:", stack.peek()); // Output: 20
console.log("Stack size after pop:", stack.getSize()); // Output: 2
