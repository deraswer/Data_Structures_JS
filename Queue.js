function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = () => {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enque = (data) => {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.deque = () => {
    let oldestIndex = this._oldestIndex;
    let newestIndex = this._newestIndex;
    let deletedData = this._storage[oldestIndex];

    if (oldestIndex !== newestIndex) {
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};