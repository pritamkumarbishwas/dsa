const LinkedList = require('./list');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepand(value);
    }

    pop() {
        return this.list.reoveFirst();
    }

    peek() {
        return this.list.head ? this.list.head.value : null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}
const stack = new LinkedListStack();
console.log("is empty", stack.isEmpty());

stack.push(20);
stack.push(22);
stack.push(12);
stack.push(42);
console.log("size", stack.getSize());
console.log("print", stack.print());
stack.pop();

console.log("peek", stack.peek());
console.log("print", stack.print());