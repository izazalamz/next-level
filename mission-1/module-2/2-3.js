const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filteredTags = [...new Set(tagsFromPosts.flat())];
console.log(filteredTags);

//? arr.flat(infinity) => to flat to infinity amounts of levels/layers
