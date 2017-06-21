// promises
// are a way  to manage async without passing zillions of
// callback functions around or nesting them to no end.
// IE this...
// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{
// 		connection.query(query3, (results3)=>{
// 			connection.query(query4, (results4)=>{

// 			});
// 		});
// 	});
// });
// this is whats happening above
// connection.query(query1){
	//do some stuff
// 	call function I got from earlier and pass it what I just got from result...
// 	call function I got from earlier and pass it what got from this result...
// 	call function I got earlier and pass it...
// }

function successCallback(result){
	console.log("success: "+result);
}
function failureCallback(error){
	console.log("failed: " +error);
}
function checkName(name,winning,losing){
	if(name =="Rob"){
		winning("Name is Rob")
	}else{
		losing("Sorry. Not Rob.")
	}
}

checkName("Rob", successCallback, failureCallback);

// *********************************************************************************************
// =========================(old school...not in use so much after es6)promises library bluebird, and kriskowal/q(on github)=====================
// what is a promise?
// it is just a js constructor that give you a few methods:
// -all
// -race
// -reject
// -resolve
// -then = basically a listener(like 'click')

// creates a promise
let myFirstPromise = new Promise((resolve,reject)=>{
	// resolve and reject are callbacks.
	// we will run resolve when we are done with our async stuff
	// we will run reject if it failed
	// setTimeout will stand in as an AJAX or SQL request
	
// starts the timeout timer
	setTimeout(function(){
		resolve("success")
	},250);		//------- > measurement of time in ms for timeout to last
});

// this is the above 'new Promise'
console.log(myFirstPromise);
// the '.then' runs when myFirstPromise runs the resolve from above. resolve is basically 'return'.
// "success"(from above) is passed as successMessage to .then
myFirstPromise.then((successMessage)=>{
	console.log(successMessage);		//whatever is passed to resolved appears here
	console.log(myFirstPromise);		//promise is now a success
});
console.log(myFirstPromise);

function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed");
		}, 4000)
	});
}

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed");
		}, 2000)
	});
}

var promiseOne = one();
var promiseTwo = two()

promiseOne.then((successMessage)=>{
	console.log(successMessage);
});
promiseTwo.then((successMessage)=>{
	console.log(successMessage);
});

var promises = [];
promises.push(promiseOne);
promises.push(promiseTwo);

// the .all() checks an event(which is the promises above)
// .all() will wait unitl EVERY promise in the array has resolved.
// It will have an array of each argument passed to each resolve
Promise.all(promises).then((data)=>{
	console.log("All done.");
	console.log(data)
});

// .race() will run as soon as one promise resolves
Promise.race(promises).then((data)=>{
	console.log("someone is done");
	console.log(data)
});































