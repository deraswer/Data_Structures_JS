function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.add = (value) => {
    let node = new Node(value);

    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;
};

DoublyList.prototype.searchNodeAt = (position) => {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        msg = { fail: 'Fail: non-existent node in this list.' };

    if (length === 0 || position < 1 || position > length) {
        throw new Error(msg.fail);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

DoublyList.prototype.remove = function (position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        msg = { fail: 'Fail: non-existent node in this list.' },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    if (length === 0 || position < 1 || position > length) {
        throw new Error(msg.fail);
    }

    if (position === 1) {
        this.head = currentNode.next;
        e
        if (!this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }

    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;

    return message.success;
};