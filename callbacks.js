// Callbacks-nothing more than passing a function to somebody else and they are going to run your code later.
// IN JS, functions are just objects.
// Therefor... you can pass functions around your code. 

// EX:
// this is an argument being passed to click
// ======THIS======
$('btn').click(function(){
	console.log("click")
});

// *****is the same as******
var clickFunction = function(){console.log("click")};
$('btn').click(clickFunction);


// ======somewhere in JQuery is this...=========
var $ = {};
$.click = function(callbackToRunLater){
	//stuff happens
	callbackToRunLater();
}

// consider the following...
x(2)(3)
// HOw can you make this work?
// THe only way is if x RETURNS a function.
// that function will take a parameter
// higher order function = a functino that gets passed around
function x(y){
	return function(z){
		console.log(y+z);
	}
}
x(2)(3)
// --->
function x(2){
	return function(z){
		console.log(2+z);
	}
}(3)
// --->
function x(2){
	return function(3){
		console.log(2+3)
	}
}


// ============================
function print(thingToPrint){
	console.log(thingToPrint);
}
// the print function doesnt need to be passed around. Because
// we have access to it locally. Think BlackJack. Deal was a 
// utility function, we called it when we needed it.

function b(number){
	let localNum = number * number;
	// call the print function above
	print(localNum);
}

function c(theString){
	let localString = theString + " is what was passed";
	print(localString)
}
 b(2);
 c("test")

 could also make a prototype of a constructor.
 BUT... what is we didnt have access to the code that needed to run our code?
 IE what if we didnt have access to the 

var a = function(theVar){
 	console.log(theVar)
 }
var b = function(number, callback){
	let localNum = number * number;
	callback(localNum);
}
b(3,function(number){
	console.log(number)
})
b(3,a);			//--------- > same as function above



var students = ['rissa', 'merilee', 'chris', 'stephen'];
students.map((student,index)=>{					//--- >.map() is available to every array
	console.log(student);
})		


































