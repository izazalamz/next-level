const target = 9;
const arr = [2, 11, 7, 13];

const twoSum = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(arr[i], i);
  }
  return undefined;
};

//* two pointer when =>
//!                    data is sorted
//!                    space constraints (optimizing space)
//!                    explicitely asked for two-pointers

const twoSum2 = (arr, target) => {
  const indexed = arr.map((value, index) => ({ value, index }));
  indexed.sort((a, b) => a.value - b.value);

  let head = 0;
  let tail = indexed.length - 1;

  while (head < tail) {
    const sum = indexed[head].value + indexed[tail].value;
    if (sum === target) {
      return [indexed[head].index, indexed[tail].index];
    } else if (sum < target) {
      head++;
    } else if (sum > target) {
      tail--;
    }
  }

  return undefined;
};
console.log(twoSum2(arr, target));
