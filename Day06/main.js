// function execute() {
// 	// location.assign("https://www.google.com.eg/");
// 	//location.replace("https://www.google.com.eg/");
// 	// location.reload();
// 	// console.log(location.protocol);
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname);
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(location.href);
// }

// function execute() {
// 	console.log(history);
// }

// function successCB(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }
// function errorCB() {
// 	console.log("Error");
// }

// navigator.geolocation.getCurrentPosition(successCB, errorCB);
// var tbody = document.getElementsByTagName("tbody")[0];
// function execute() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var users = JSON.parse(xhr.response);
// 				for (var i = 0; i < users.length; i++) {
// 					tbody.innerHTML += `
//                         <tr>

//                             <td>${users[i].id}</td>
//                             <td>${users[i].name}</td>
//                             <td>${users[i].email}</td>
//                             <td>
//                                 <button>view User</button>
//                                 <button>delete User</button>
//                             </td>
//                         </tr>
//                     `;
// 				}
// 			}
// 		}
// 	};
// }

// document.cookie = "email=a.a.com";
// document.cookie = "name=ali";

// document.cookie = "email=test.com";

// var expireDate = new Date();

// expireDate.setDate(expireDate.getDate() + 3);

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }

// function deleteCookie(key) {
// 	var myDate = new Date();
// 	myDate.setDate(myDate.getDate() - 1);
// 	document.cookie = key + "=prt;expires=" + myDate;
// }
// function getAllCookies() {
// 	return document.cookie;
// }

// deleteCookie("colors");

// saveCookie("colors", JSON.stringify(["red", "green", "blue"]));
// saveCookie("user", JSON.stringify({ id: 1, name: "ahmed", age: 20 }));
