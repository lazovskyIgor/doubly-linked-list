const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if(this.length) {
            
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this._head) return this._head.data;
        else return null;
    }

    tail() {
        if(this._tail) return this._tail.data;
        else return null;
    }

    at(index) {
        if(this.length) {
            let currentNode = this._head;
            for(let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.data;
        }
        return -1;
    }

    insertAt(index, data) {
        if(this.length) {
            let currentNode = this._head;
            let insertNode = new Node(data);
            for(let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            currentNode.prev.next = insertNode; 
            insertNode.next = currentNode;
            insertNode.prev = currentNode.prev;
            currentNode.prev = insertNode;             
            this.length++;
        }
        return this;
    }

    isEmpty() {
        if(!this.length) return true;
        else return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if(this.length) {
            let currentNode = this._head;            
            for(let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            if(currentNode != this._tail && currentNode != this._head) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;     
                currentNode = null;
            } 
            if(currentNode == this._head) {
                if(currentNode == this._tail) {
                    this._head = null;
                    this._tail = null;
                } else {
                    this._head = currentNode;
                }
            } 
            if(currentNode == this._tail) {
                this._tail.prev.next = null;
                this._tail = null;
            }            
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this.length > 1) {
            var tempHead, tempTail,tempData, counter;
            counter = this.length;
            tempHead = this._head;
            tempTail = this._tail;
            for (var i = 0; i < counter / 2; i++) {
              tempData = tempTail.data;
              tempTail.data = tempHead.data;
              tempHead.data = tempData;
    
              tempHead = tempHead.next;
              tempTail = tempTail.prev;
            }
            return this;
          }
          return this;
    }

    indexOf(data) {
        if(this.length) {
            let currentNode = this._head;
            let currentNumber = 0;
            while(currentNode) {
                if(currentNode.data == data) {
                    return currentNumber;
                }
                currentNumber++;
                currentNode = currentNode.next;
            }
            return -1;
        } else return -1;
    }
}

module.exports = LinkedList;
