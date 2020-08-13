function Stack() {
    this._size = 0;
    this._storage = {};
};

Stack.prototype.push = (data) => {
    let size = this._size++;
    this._storage[size] = data;
};

Stack.prototype.pop = () => {
    let size = this._size;

    if (size) {
        let deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;

        return deletedData;
    };
};