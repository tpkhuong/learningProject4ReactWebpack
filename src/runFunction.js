import { default as sayHi, obj } from "./marvel";

var someName = "Deadpool";

export default function printStuff() {
    console.log("running from runFunction");
    console.log(sayHi(someName));
    console.log(obj.firstName);
    console.log(obj.lastName);
}
