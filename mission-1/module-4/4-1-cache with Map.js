const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for:", id);
  return {
    id,
    data: `some data for id: ${id}`,
    timestamp: new Date().getTime(),
  };
};
const getData = (id) => {
  if (dataCache.has(id)) {
    console.log(`cache HIT for id: ${id}`);
    return dataCache.get(id);
  }
  console.log(`cache MISS for id: ${id}`);
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};

console.log(getData(123));
console.log(getData(123));
console.log(getData(12));
console.log(dataCache);
