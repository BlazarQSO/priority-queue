const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes = [];                
        this.length = 0;
    }

    push(data, priority) {
        let node = new Node(data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);                
    }

    pop() {
        if (this.root != null) {
            let node = this.parentNodes.pop();
            this.length--;
            return node.data;
        }
    }

    detachRoot() {
        this.root = null;
    }

    restoreRootFromLastInsertedNode(detached) {

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

    clear() {
        this.root = null;
        this.parentNodes = [];
        this.length = 0;
    }

    insertNode(node) {
        if (this.root == null) {
            this.root = node;
            this.parentNodes.push(node);
        } else {                    
            this.parentNodes.push(node);
        }
        this.length++;
    }

    shiftNodeUp(node) {

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;
