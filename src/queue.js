const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
        this.maxSize = 0;
        this.length = 0;
        if (maxSize != undefined) {
            this.maxSize = maxSize;
        } else {
            this.maxSize = 30;
        }
        this.heap = new MaxHeap();
    }

    push(data, priority) {
        if (this.length < this.maxSize) {
            this.heap.push(data, priority);
            this.length++;
        } else {
            throw new Error();
        }
    }

    shift() {
        if (this.length == 0) {
            throw new Error();
        }
        this.length--;
        return this.heap.pop();
    }

    size() {
        return this.length;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = PriorityQueue;
