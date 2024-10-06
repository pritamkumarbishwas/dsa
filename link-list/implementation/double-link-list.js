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

        // console.log(value, index)
        const newNode = new Node(value);
        if (index < 0 || index > this.size) {
            console.log("Invallid Position")
            return;
        }

        if (index == 0) {
            if (this.isEmpty()) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else {
            let current = this.head;
            let count = 0;

            // Traverse to the node before the insertion point
            while (count < index - 1) {
                current = current.next;
                count++;
            }

            // Insert the new node in the correct position
            newNode.next = current.next;
            if (current.next) {
                current.next.prev = newNode; // If it's not the last node, update the previous link of the next node
            }
            current.next = newNode;
            newNode.prev = current;
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

    removeSpecific(value) {
        if (this.isEmpty()) {
            console.log("Node list is empty");
            return;
        }

        if (this.head.value === value) {
            this.removeFirst();
            return;
        }

        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current == this.tail) {
                    this.removeLast();
                    return;
                }

                current.prev.next = current.next;
                if (current.next) {
                    current.next.prev = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
    }


    print() {
        if (this.isEmpty()) {
            console.log("Node list is empty");
            return;
        }

        let current = this.head;
        let listValue = "";

        while (current) {
            listValue += `${current.value} `;
            current = current.next;
        }
        return listValue;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

const list = new DoubleLinedkList();

list.append(10)
list.append(14)
list.append(15)
list.append(16)
list.append(18)
console.log("get size", list.getSize());
console.log("list is Empty", list.isEmpty());
console.log("print all node", list.print());
list.prepand(45);
console.log("print all node", list.print());
list.append(35)
console.log("print all node", list.print());
list.insertedSpecific(55, 4);
console.log("print all node", list.print());
list.removeFirst();
console.log("print all node", list.print());
list.removeLast();
console.log("print all node", list.print());
list.removeSpecific(18);
console.log("print all node", list.print());
