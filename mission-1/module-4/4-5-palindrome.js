const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");

  if (reversed !== normalized) {
    return false;
  }
  return true;
};

const isPalindromeTwoPointer = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let head = 0;
  let tail = normalized.length - 1;

  while (head < tail) {
    if (normalized[head] === normalized[tail]) {
      head++;
      tail--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindromeTwoPointer("level"));
