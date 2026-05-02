class Counter {
  constructor(count = 0) {
    this.count = count;
  }
  add(amount) {
    this.count += amount;
  }
  print() {
    console.log(this.count);
  }
}
const counter1 = new Counter();

counter1.print();
counter1.add(10);
counter1.add(1);
counter1.print();
