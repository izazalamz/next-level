// Some

const numbers = [1, 2, 3, 7, 5];
const hasOddNumber = numbers.some((number) => number % 2 !== 0);
const hasOddNumbers = numbers.every((number) => number % 2 !== 0);
// console.log(hasOddNumbers);

const currentUserRoles = ["user", "editor", "admin"];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => {
  return featureAccessRoles.includes(role);
});
// console.log(canAccess);

// Array.from()

const arr = Array.from([1, 2, 3], (value, i) => value * value);

// console.log(arr);

const range = (start, stop, step = 1) => {
  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );
};

console.log(range(91, 99));
