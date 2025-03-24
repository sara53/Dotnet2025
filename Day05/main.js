// V1
// function execute() {
// 	var parenet = document.getElementById("parent");

// 	var element = document.createElement("p");
// 	element.innerHTML = "Hello dotnet";

// 	element.setAttribute("class", "jsClass");

// 	parenet.appendChild(element);
// }
// V2
// <div>Hello dotnet</div>
// appenChild([Node])
// var parenet = document.getElementById("parent");

// var element = document.createElement("p"); // element as a Node

// var text = document.createTextNode("hello dotnet"); // Node

// element.appendChild(text);

// console.log(element);
// function execute() {
// 	parenet.appendChild(element);
// }
//v3 appenChild
// var parenet = document.getElementById("parent");

// var element = document.createElement("p"); // element as a Node

// var text = document.createTextNode("hello dotnet"); // Node

// var result = element.appendChild(text);
// console.log("-----------------");

// var span = document.createElement("span");
// span.innerHTML = "Hello Span";

// var result = parenet.appendChild(span);
// console.log(result);
// function execute() {
// 	parenet.appendChild(element);
// 	parenet.appendChild(span);
// }
/**----------------------------- */
// var parenet = document.getElementById("parent");

// var element = document.createElement("p");
// var first = document.getElementById("first");

// element.append("hello dotnet as string type");

// element.setAttribute("class", "jsClass");
// var span = document.createElement("span");
// span.innerHTML = "Hello Span";

// function execute() {
// 	// parenet.before(element, span);
// 	// parenet.insertAdjacentElement(); // search
// 	// parenet.before(element);
// 	// first.after(element);
// 	//parenet.append(element);
// 	//document.body.append(element, span);
// }

/**======================== */
/** Attach Function */
// var p = document.getElementById("first");

// var btn = document.getElementById("btn");
// function changeText() {
// 	p.innerHTML = "Hello dotnet";
// }
// // jsEngine
// // Fire Event -- jsEnfine -- createEvent Object -- send
// // as args to funcs
// function changeStyle(color) {
// 	p.style.background = color;
// }

// btn.onclick = changeText; // fire clicke changeText(object) // {information Evnent}
// // changeStyle(Event Object)
// // js Engine-- fire Event--
// // btn.onclick = changeText;
// // btn.onclick = function (e) {
// // 	console.log(e.target);
// // 	changeStyle("green");
// // 	changeText();
// // };
/** addEventListner Function */
// var p = document.getElementById("first");
// var btn = document.getElementById("btn");

// function changeText() {
// 	p.innerHTML = "Hello dotnet";
// }

// function changeStyle() {
// 	p.style.background = "green";
// }

// btn.addEventListener("click", changeText);
// btn.addEventListener("click", changeStyle);

// 2 fun

// btn.removeEventListener("click", changeStyle);

// btn.addEventListener("click", function (e) {
// 	console.log(e.target);
// 	changeStyle("red");
// });

// btn.addEventListener("click", changeStyle);
// function first(e) {
// 	console.log("first");
// }
{
	/* <div class='first' onclick='first(event)'>
	<div class='second' onclick='second(event)'>
		<div class='third' onclick='third(event)'></div>
	</div>
</div>; */
}
// function second(e) {
// 	//e.stopPropagation();

// 	console.log("second");
// }
// function third(e) {
// 	//e.stopPropagation();
// 	console.log("third");
// }

// var input = document.getElementsByTagName("input")[0];
// var output = document.getElementById("output");
// var error = document.getElementById("error");

// input.addEventListener("input", function (e) {
// 	if (e.target.value.length >= 3) {
// 		output.innerHTML = e.target.value;
// 		e.target.style.border = "2px solid green";
// 		error.style.display = "none";
// 	} else {
// 		e.target.style.border = "2px solid red";
// 		output.innerHTML = "";
// 		error.style.display = "block";
// 	}
// });

// function login(e) {
// 	// submit -- send data and refersh
// 	// connect post
// 	e.preventDefault();
// 	console.log("Send Login Request with name ", input.value);
// }

// input.addEventListener("focus", function (e) {
// 	e.target.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function (e) {
// 	e.target.style.border = "2px solid orange";
// });
