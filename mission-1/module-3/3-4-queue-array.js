class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  // 0(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log("Start ->", this.items.join(" -> "), "-> End");
  }
}

const q = new Queue();
console.log(q.peek());
q.print();
q.enqueue(10);
console.log(q.peek());
q.print();
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());
q.dequeue();
q.print();
