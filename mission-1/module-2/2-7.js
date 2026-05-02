//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

const groupedData = surveyResponses.reduce((groups, response) => {
  if (groups[response]) {
    groups[response] += 1;
  } else {
    groups[response] = 1;
  }
  return groups;
}, {});

console.log(groupedData);
