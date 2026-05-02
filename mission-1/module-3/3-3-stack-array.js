class Stack {
  constructor() {
    this.items = [];
  }
  push(elem) {
    this.items.push(elem);
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items);
  }
}

const stack1 = new Stack();
stack1.push("hhe");
stack1.push("mme");
console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());
stack1.print();
