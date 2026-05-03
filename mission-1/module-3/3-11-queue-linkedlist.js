class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const removedNode = this.first;
    this.first = this.first.next;

    if (this.length === 1) {
      this.last = null;
    }

    this.length--;
    return removedNode.value;
  }

  peek() {
    return this.first?.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    const arr = [];
    let currNode = this.first;

    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }

    console.log("start =>", arr.join(" => "), "=> end");
  }
}
