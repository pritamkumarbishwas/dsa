const LinkedList = require('./list');

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.reoveFirst();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpyt() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}
const queue = new LinkedListQueue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log("print", queue.print());
console.log("size", queue.getSize());
console.log("is empty", queue.isEmpyt());
queue.dequeue();
console.log("print", queue.print());
console.log("peek", queue.peek());
