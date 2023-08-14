let hobbies = ["sports", "cooking", 25, true, {name: "baking"}, ["reading", "traveling"]];

console.log(hobbies);

for(let index in hobbies){
    console.log(hobbies[index]);
}
let hobbiesArray = ["sports", "cooking", "painting"];
let hobbiesSubset = hobbiesArray.slice(0,2);
console.log(hobbiesSubset);

//let filteredHobbies = hobbiesArray.filter(val :string);
let filteredHobbies = hobbiesArray.filter(val :string)  => val !== "sports");
console.log(filteredHobbies);


let updatedHobbies = hobbiesArray.map((val:string ) => "hobby: "+val );

console.log(updatedHobbies);