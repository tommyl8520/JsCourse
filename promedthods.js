const person = {
    name: "jim",
    age: 36,
    greet: function(){
        console.log("hi my name is "+this.name)

    }

}


console.log(person.greet())