// Function

// defining a function
function  sayhello (name) {
    return 'Hello ' + name +' !!!' 
}
// invoking a function
console.log(sayhello('rahul'));

// Function without name (anonymous function)

var sayhello = function (name) {
    return 'Hello ' + name +' !!!' 
}
console.log(sayhello('rahul'));

// Operator  : Arithmetic , conditional , logical, assignment , bitwise , comparison 

var err = 30;           // assignment operator
var err1 = '30';

var result = err == err1   // conditional operator  javascript doesnot care about data type
var result1 = err === err1  // conditional operator triple equals to checks the data type

console.log(result); 
console.log(result1);     