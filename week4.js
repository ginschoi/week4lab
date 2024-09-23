// Tasks
// Using the console log
    // write a story about 2 truthy people trying to get into the mirrors ( ! / NOT )
    // write a story about 1 truthy person and 1 falsey person trying to get into the abyss (&&)
    // write a story about 2 falsey people trying to get into the sanctum ( || / OR )

//Constraints
    // You must consider the 2 types of variables (const, and let).
    // You must do multiple console.log to demonstrate the understanding of change variables with let.
    // You must use both “string” and number types in your paragraph.
    // You must use comparison statements to showcase whether the people are truthy or falsey
    // Make sure to use a number type where you can and a string type where you can. If you find a place for boolean type use that as well.


//PLANNINNG ****
    // 2 truthy people = David & Amy
    // 1 truthy person = David / Erin = falsey person
    // 2 falsey people = Erin & Meg

const person1 = "David";
const person2 = "Amy";
const person3 = "Erin";
const person4 = "Meg";

let numberofkeytypes = "2";

if (person1 !== person2){
    console.log(person1 + person2 + " have " + numberofkeytypes + "truthy keys and can get into the mirrors with NOT statement");    
}

numberofkeytypes = "1";

if(person1 && person3){
    console.log(person1 + person3 + " have " + numberofkeytypes + "truthy key and 1 falsey key, and can enter the abyss with AND statement");
}

numberofkeytypes = "2"

if(person3 || person4){
    console.log(person3 + person4 + " have " + numberofkeytypes + "falsey keys and can get into the sanctum with OR statement");
}