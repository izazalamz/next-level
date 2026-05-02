// Map object


const course1 = { name: "Programming Hero", }
const course2 = { name: "Next Level Web Development", }

// const courses = {}
// courses[course2] = { courseId : "level2"} 
// courses[course1] = { courseId : "level1"} 

// console.log(courses['[object Object]'])

const map = new Map();

map.set(course1, {courseId : "level1"})
map.set(course2, { courseId: "level2" })

console.log(map)

// map.clear()
// map.size
// map.delete(key)
// map.has(key)

// map.forEach(value, key, unknown)
// map.keys()
// map.values()
// map.entries()