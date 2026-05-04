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

const parenthesisChecker = (text) => {
  const expectedStack = new Stack();
  for (const letter of text) {
    if (letter === "(") {
      expectedStack.push(")");
    } else if (letter === "{") {
      expectedStack.push("}");
    } else if (letter === "[") {
      expectedStack.push("]");
    } else if (letter === ")" || letter === "}" || letter === "]") {
      if (expectedStack.pop() !== letter) {
        return false;
      }
    }
  }
  return expectedStack.isEmpty();
};
console.log(parenthesisChecker("()"));
