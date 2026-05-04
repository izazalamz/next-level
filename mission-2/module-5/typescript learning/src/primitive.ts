//* JS => string, number, boolean, undefined, null
//* TS => never, unknown, any, void

let userName: string = "izaz123";
let userId: number = 123;

//? typescript gives suggestion for class methods
//? also warns while writing code about wrong types and methods

//* => explicite type setting
let isAdmin: boolean = false;

//* -> implicite (inferred) type setting
let isUser = true;

//* when value is not define it automatically become type "any"
let x = undefined;

//* type undefined explicitely
let z: undefined = undefined;

//? JS won't mind if we mix types because it's Dynamically typed language
//? So when there is unintentionally type mixing we find the error in run time.
//? But we can catch errors while building with typescript
