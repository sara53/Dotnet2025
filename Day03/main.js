// var trackName = "dotnet";
// function greet() {
// 	trackName = "PHP";
// 	console.log(trackName);
// 	return "ITI";
// }

// console.log(trackName);
// var result = greet();
/**----------------------- */

// console.log(result);
// var trackName = "dotnet";
// function greet() {
// 	var trackName = "PHP";
// 	console.log(trackName);
// 	return "ITI";
// }

// console.log(trackName);
// var result = greet();
// console.log(result);
/**----------------------- */
// function greet() {
// 	console.log(trackName);
// 	return "ITI";
// }

// var result = greet();
// console.log(result);
// console.log("---------------------")
// inside function (local scope)
// var --- function scope
// function greet() {
// 	var fname = "ali";
// 	console.log(fname); // heree........
// 	return "ITI";
// }

// var result = greet();
// console.log(result);
// function sayHello(trackName) {
// 	console.log("weclome " + trackName + " At iti");
// }

// function greet(trackName) {
// 	console.log("inside Greet function");
// 	return sayHello(trackName);
// }

// var result = greet("dotnet");

// console.log(result);
/** object
 * properties
 * 	== Key == Value [any datatype]
 * Methods
 *access
 dotnotation
 square notation

 [get (propery)] == founded == value
					== not founded == undefined
 */
// var person = {
// 	fname: "ali",
// 	age: 25,
// 	colors: ["red", "green", "blue"],
// };

// console.log(person["gender"]); // undefined
// console.log(person["fname"]); // get fname = ali
// console.log(person["age"]); // get fname = ali
// console.log(person["colors"]); // get fname = ali
// var x = person.fname;
// console.log(x);
// dotnotation --- Get
// console.log(person.fname); // ali
// console.log(person.age); //
// console.log(person.colors);
// console.log(person.gender);
// var person = {
// 	fname: "ali",
// 	age: 25,
// 	colors: ["red", "green", "blue"],
// 	address: {
// 		city: "alex",
// 		code: 123,
// 		street: "saad Str",
// 	},
// };

// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address["city"]);

// person["fname"] = "ahmed";
// person["gender"] = "male";
// dotnotation
// person.fname = "mona"; // override

// person.age = 30; // override

// person.gender = "female"; // add to object
// console.log(person);
// var person = {
// 	fname: "ali",
// 	age: 25,
// 	display: function (fname) {
// 		return fname;
// 	},
// };

// // method
// var result = person.display(1234);
// console.log(result);
// user defined
// Object
// var str = "hello at iti";

// var arr = [1, 2, 4];
// console.log(str.length); //

// arr.push(); // method built in object push
// var trackName = "dotnet";
// function greet() {
// 	var trackName = "php"; // Shadwing
// 	console.log(trackName);
// }

// greet();
