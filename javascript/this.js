
// console.log(this); // it will print the window object in the console.


//19/feb/2025



// "use strict";   


//  // [(this substitution)] will not take place  // now it will not print the window object in the console as there is no substitute for this in the strict mode.

// console.log(this); // it will print the window object in the console.as it is already a global object.

// function dheeraj(){
//     console.log("this",this); // it will print the window object in the console.
// }
// console.log(dheeraj()); // it will print the window object in the console.

// window.dheeraj(); // it will print the window object in the console. as window is a calling object(in strct mode).





//  let dheeraj=()=>{
//     console.log("this",this); // it will print the window object in the console. it will go 1 level up to find the value of this.
// }
// dheeraj();   // in arrow function this will print the window object    as it will take the value of this from the parent scope.



// let object={
//     name:"dheeraj",
//     Age : 21,
//     display: function(){
//         console.log(this.Age); 
//     },
// };
// object.display(); // it will print the age of the object 

// for arrow function of disply it will print undefined as  there s no age in the wndow object.







// if  this  is  in one key of an object with  the nested function  then it will go to its parent function to find the value of this.// 
// let object={
//     name:"dheeraj",
//     Age : 21,
//     display: function(){
//         const innerfunction =()=>{
//             console.log(this); 
//         };
//         innerfunction(); 
// },
// };

// object.display();



// call apply bind method in javascript // call method is used to call the function of another object in the current object.
// change the value of this in the current object.
let object1={
    name:"dheeraj",
    Age : 21,
    display: function(){
        console.log(this); 
    },
};
object1.display(); // it will print the name of the object1.
let object2={
    name:"priyanka",
    Age : 22,
    
};
object1.display.call(object2); // it will print the name of the object2 in the object1 if we use call method.