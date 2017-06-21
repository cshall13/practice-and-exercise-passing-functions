

// defining the function to run to loop over array elements and test each element to see if %2 = true
function callback(num) {
    return num % 2 === 0
}

// pass callback in place of anonymous function to run inside of findElement function
function findElement(array,callback){
    for(i = 0; i < array.length; i++){
// run callback function over each element of array to test if %2 = true
        if(callback(array[i])){
// if %2 = true return the element the callback function was testing and exit the loop
            return array[i];
        }
    }
// if %2 != true for any element, return "false" and exit the loop
    return false
}

// this will print the element if %2 = true or print "false" if %2!=true.
console.log(findElement([1,3,5,9], callback));



// defining the function to run to loop over array elements and test each element to see if str.indexOf('itch') = true
function callback(str) {
    return str.indexOf('itch') !== -1;
}
// pass callback in place of anonymous function to run inside of findElement function
function findElement(array,callback){
    for(i = 0; i < array.length; i++){
// run callback function over each element of array to test if str.indexOf('itch') = true
        if(callback(array[i])){
// if str.indexOf('itch') = true return the element the callback function was testing and exit the loop
            return array[i];
        }
    }
// if str.indexOf('itch') != true for any element, return "false" and exit the loop    
    return false
}

// this will print the element if str.indexOf('itch') = true or print "false" if str.indexOf('itch') !=true.
console.log(findElement(['Jim','Indian','Marsh','Glitch'], callback));