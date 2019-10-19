class Node {
	constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;                                
        this.left = null;
        this.right = null;
    }

    appendChild(node) {    
        if (this.left == null) {
            this.left = node;
            node.parent = this;
        } else if (this.right == null && node != this.left) {
            this.right = node;
            node.parent = this;
        }
    }

    removeChild(node) {
        if (this.left == node) {
            this.left = null;
            node.parent = null;
        } else if (this.right == node) {
            this.right = null;
            node.parent = null;
        } else if (node != this.left || node != this.remove) {
            throw new Error();
        }
    }

    remove() {
        if (this.parent != null) {
            if (this.parent.left == this) {
                this.parent.left = null;
                this.parent = null;
            } else {
                this.parent.right = null;
                this.parent = null;
            }
        }                
    }

    swapWithParent() {
        if (this.parent != null) {
            let tempLeft = this.left;
            let tempRight = this.right;
            let parent = this.parent;
            if (this.parent.left == this) {
                this.right = parent.right;
                if (parent.right != null) {
                    parent.right.parent = this;
                }
                this.left = parent;
                this.parent = parent.parent;
                if (parent.parent != null) {
                    if (parent.parent.left == parent) {
                        parent.parent.left = this;
                    } else {
                        parent.parent.right = this;
                    }
                }
                parent.left = tempLeft;                        
                parent.right = tempRight;
                parent.parent = this;
            } else {
                this.left = parent.left;
                if (parent.left != null) {
                    parent.left.parent = this;
                }
                this.right = parent;
                this.parent = parent.parent;
                if (parent.parent != null) {
                    if (parent.parent.left == parent) {
                        parent.parent.left = this;
                    } else {
                        parent.parent.right = this;
                    }
                }
                parent.left = tempLeft;
                parent.right = tempRight;
                parent.parent = this;
            }
        }
    }
}

module.exports = Node;
