// Class to define a node in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue class implemented using linked list
class Queue {
    constructor() {
        this.front = null; // Points to the front node in the queue
        this.rear = null;  // Points to the rear node in the queue
        this.size = 0;     // Tracks the size of the queue
    }

    // Add a new element to the end of the queue (Enqueue)
    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = newNode; // If queue is empty, the new node becomes both front and rear
            this.rear = newNode;
        } else {
            this.rear.next = newNode; // Link the new node at the rear
            this.rear = newNode;      // Update the rear to the new node
        }
        this.size++;
    }

    // Remove and return the element from the front of the queue (Dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return null; // If queue is empty, return null
        }
        const removedNode = this.front;
        this.front = this.front.next; // Move the front pointer to the next node
        if (this.front === null) {
            this.rear = null; // If the queue becomes empty, reset rear to null
        }
        this.size--;
        return removedNode.value; // Return the value of the removed node
    }

    // Return the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value; // Return the value of the front node
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the queue
    getSize() {
        return this.size;
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.peek());  // Output: 10
console.log("Queue size:", queue.getSize());  // Output: 3

console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Front element after dequeue:", queue.peek()); // Output: 20
console.log("Queue size after dequeue:", queue.getSize()); // Output: 2
