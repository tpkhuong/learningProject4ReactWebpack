import printStuff from "./runFunction";

printStuff();

var newObj = { a: "what is this", b: "some stuff" };

var anotherObj = { ...newObj, c: "this will work" };
console.log(anotherObj);