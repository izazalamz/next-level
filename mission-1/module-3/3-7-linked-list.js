class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index out of bound");
      return undefined;
    } else if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
      console.log(this.length);
    } else {
      const newNode = new Node(value);

      const leadingNode = this._traverseToIndex(index - 1);

      const holdingNode = leadingNode.next;
      leadingNode.next = newNode;
      newNode.next = holdingNode;
      this.length++;
    }
  }
  _traverseToIndex(index) {
    let tempIndex = 0;
    let currNode = this.head;
    while (tempIndex !== index) {
      currNode = currNode.next;
      tempIndex++;
    }
    return currNode;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.error("index out of bound");
      return undefined;
    }
    if (index === 0) {
      const nodeToBeRemoved = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return nodeToBeRemoved.value;
    }
    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToBeRemoved = leadingNode.next;
    leadingNode.next = nodeToBeRemoved.next;
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    this.length--;
    return nodeToBeRemoved.value;
  }
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("head ->", arr.join(" -> "), "-> null");
  }
}
const linkedlist = new LinkedList();

linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);

linkedlist.prepend(60);
linkedlist.prepend(50);
linkedlist.prepend(40);

linkedlist.insert(3, 100);
linkedlist.print();
