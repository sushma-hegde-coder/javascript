//variables
//number, boolean , string, data, array, object
"use strict";  //for clean code.. errors shown clearly
var a = "test"; //single or double
   // b = "hello"; //not necessary to use var keyword not recommonded


//1. simple method
// scope: for loop
// for(var i=0; i<10; i++){
//     // isolate scopes : each iteration : scope     
//     setTimeout(function (){                     //test 10         in js everything is reference
//     console.log("TASK",i);
//     }, i*1000);    
// }



//2. pass by value
// for(var i=0; i<10; i++){
//     test(i);
// }

// function test(i){
//     setTimeout(function (){
//         console.log("TASk", i);
//     }, i*1000);
// }                                   run out of names



//3. self invoking function
// without names
// for(var i =0; i< 10;i++){
//     //IIFE : immmedicately invoked function expression
//     (function(j){
//         setTimeout(function(){
//          console.log("TASK", j);
//         }, j*1000);
//         })(i);   // i is calling function(j)    instead of test(i) use just (i) ....so that function needs no name 
// }


//4. modern solution 
//use let
//earch iteration is one block
for(let i=0; i<10; i++){
    setTimeout(function(){               //there are 10 i's, 10 references
        console.log("TASK", i);        
    }, i*1000);
}

const no =10;
//immutable
//no = 20;
const obj ={ name:"test", age:12};
//mutationg the object: mutable
obj.name="demo";
//always keep your objects immutable
//arrays and objects are mutable by default 

const obj1={name: "su"};
obj1="ra";
