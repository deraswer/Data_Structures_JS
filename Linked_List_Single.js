function Node(data) {
    this.data = data;
    this.next = null;
};

function SinglyList() {
    this._length = 0;
    this.head = null;
};

SinglyList.prototype.add = (value) => {
    let node = new Node(value),
        currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        this.length++;

        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.searchNodeAt = (position) => {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        msg = { fail: 'Operation failed: non-existent node in this list.' };

    if (length === 0 || position < 1 || position > length) {
        throw new Error(msg.fail);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = (position) => {
    let currentNode = this.head,
        length = this._length,
        count = 0,
        msg = { fail: 'Operation failed: non-existent node in this list.' },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    if (position < 0 || position > length) {
        throw new Error(msg.fail);
    }

    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};