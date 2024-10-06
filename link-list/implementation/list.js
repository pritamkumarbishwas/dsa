class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // Method to add a node at the beginning of the linked list (Prepend)
    prepand(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }


    // Method to add a node at the end of the linked list
    append(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    // Method to insert a node at a specific index
    insertAt(index, value) {
        if (index < 0 || index > this.size) {
            console.log("Index Out of Range");
            return;
        }

        let newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.size++;
    }

    // Print the values of the linked list
    print() {
        if (this.isEmpty()) {
            return "list is empty";
        } else {

            let current = this.head;
            let listValue = "";

            while (current) {
                listValue += `${current.value} `;
                current = current.next;
            }

            return listValue;
        }
    }

    // Remove the first node
    reoveFirst() {
        if (this.isEmpty()) {
            console.log("list is empty");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    //Remove the last node
    removeLast() {
        if (this.isEmpty()) {
            console.log("list is Empty");
            return;
        }

        if (this.size == 1) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.size--;
    }


    // Remove a node with a specific value
    removeSpecific(value) {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        } else {
            let current = this.head;
            let previous = null;
            while (current && current.value !== value) {
                previous = current;
                current = current.next;
            }
            if (!current) {
                console.log("Node is not found");
                return;
            }

            previous.next = current.next;
            this.size--;
        }
    }

}

module.exports = LinkedList;

// let list = new LinkedList();
// console.log(list.print());
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.prepand(2);
// list.append(12)
// list.append(13)
// list.append(15)
// list.append(155)
// console.log(list.isEmpty());
// console.log(list.getSize());
// console.log(list.print());
// list.insertAt(3, 8)
// list.reoveFirst();
// list.removeLast();
// list.removeSpecific(15);
// console.log(list.print());
