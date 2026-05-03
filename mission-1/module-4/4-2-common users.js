const USER_COUNT = 50000;
let user_A = [];
let user_B = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  user_A.push(createUser(i));
  user_B.push(createUser(i + 25000));
}
// console.log(user_A);
// console.log(user_B);

const commonFriendsSlow = (arr1, arr2) => {
  const commonFriendList = [];

  const startTime = performance.now();
  for (let userA of arr1) {
    for (let userB of arr2) {
      if (userA.id === userB.id) {
        commonFriendList.push(userB);
      }
    }
  }
  const endTime = performance.now();
  return { elapsedTime: endTime - startTime };
};

const commonFriendsFast = (arr1, arr2) => {
  const commonFriendList = [];
  const startTime = performance.now();
  const unique_arr1 = new Set(arr1.map((user) => user.id));

  for (const item of arr2) {
    if (unique_arr1.has(item)) {
      commonFriendList.push(item);
    }
  }
  const endTime = performance.now();
  return { elapsedTime: endTime - startTime };
};
console.log(commonFriendsSlow(user_A, user_B));
console.log(commonFriendsFast(user_A, user_B));
