class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoubleLinedkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to add a node at the beginning of the linked list (Prepend)

    prepand(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    insertedSpecific(value, index) {
        const newNode = new Node(value);
        if (index > 0 || index > this.size) {
            console.log("Invallid Position")
            return;
        }
        if (index == 0) {
            if (this.isEmpty()) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;

            }
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while (current < index) {
                previous = current;
                current = current.next;
                count++;
            }

            newNode.prev = previous;
            newNode.next = current;

            if (previous) {
                previous.next = newNode;
            }

            if (current) {
                current.prev = newNode;
            }

            if (index === this.size) {
                this.tail = newNode;
            }
        }
        this.size++;
    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log("Node list is empty");
            return;
        }
        const value = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.prev = null;
        }

        this.size--;
        return value;
    }

    removeLast() {
        if (this.isEmpty()) {
            console.log("Node list is empty");
            return;
        }
        const value = this.tail.value;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;

        }
        this.size--;
        return value;
    }

    removeSpecific() {

    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}