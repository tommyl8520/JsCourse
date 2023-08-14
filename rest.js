const hobbies = ["sports", "cooking"];
const copiedHobbiesArray = [...hobbies, ...["traveling"]];
console.log(copiedHobbiesArray);


const person = {name: 'jim', age:36};
const copiedPerson = {...person, ...{hobby: "traveling"}};
console.log(copiedPerson);



const toArray = (...args) => args;


console.log(toArray(args: 1,2,3));

const {name, ..rest} = copiedHobbiesArray;

console.log(rest);
