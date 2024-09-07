class Queue {
    constructor(props) {
        this.queue = [];
    }

    // add element
    push(element) {
        // TC = O(1)
        // SC = O(1)
        this.queue.push(element);
    }

    // remove element
    pop() {
        // TC = O(n)
        // SC = O(1)
        if (this.isEmpty()) {
            return "Queue is Empty";
        }
        return this.queue.shift();
    }

    // Check Top
    top() {
        // TC = O(1)
        // SC = O(1)
        if (this.isEmpty()) {
            return "Queue is Empty";
        }
        return this.queue[0];
    }
    // check is empty or not
    isEmpty() {
        // TC = O(1)
        // SC = O(1)
        return this.queue.length === 0;
    }

    // size
    size() {
        // TC = O(1)
        // SC = O(1)
        return this.queue.length;
    }

    // clear
    clear() {
        // TC = O(1)
        // SC = O(1)
        this.queue = [];
    }
}

const myQueue = new Queue();
myQueue.push(10);
myQueue.push(20);
myQueue.push(30);
console.log("top element ", myQueue.top());
console.log("size of queue", myQueue.size());
console.log("check empty", myQueue.isEmpty());
console.log("remove element", myQueue.pop());
console.log("element in queue", myQueue.queue);
myQueue.clear()
console.log("check element in queue", myQueue.queue);