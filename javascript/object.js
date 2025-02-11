// let info ={
//     name: "vishal thakur",
//     age:23,
//     marks:32,
//     books: ["hc verma","rd sharma", "honeycomb"],
//     hobbies:{       //this is nested objects as therre 
//         reading:"books",
//         playing:"volleyball",
//     }
// };

//                       //to get the keys of the object 
  //console.log(Object.keys(info));

//                       //to get all the values of the object
  //console.log(Object.values(info));



// // console.log(info["age"]);
// // console.log(info.age);
// // console.log(info.books[1]);

// // // info.marks=23; // if marks was not present in the object then it will add the new key in the info.or if present then will change the value of the key.

// // delete (info.marks);
// // delete info.age;   to delete the key from the object.

// delete info.name;
// console.log(info);



//   const classInfo= [{
//     name:"vishal thakur",
//     age:15,
//     class:10,

// },
// {
//     name:"dheeraj thakur",
//     age:16,
//     class:10
// },
// {
//     name:"samar thakur",
//     age:14,
//     class:9,
// },
// ];

// console.log(classInfo[2]);  // to access the object from the array
// console.log(classInfo[2].name);  // to access the key from the object

//                        //   to delete last element of array
// classInfo.pop();
// console.log(classInfo);





// let a =2;
// let b={};
//  console.log(a==b);  // as it is object and have disfferent address.
 

// let student ={...info , age:65}; // changes the age of the student object.
// student.name= "aabc";
// console.log(info);
// console.log(student);

 
// let { name,age,marks ,gmail} = info;  // destructuring the object.
// console.log(name,age,marks);//print the values of the object.


//
//
// //
// let {name:username="hi", age, score:marks ,...data} = info;  // destructuring the object.

// console.log(name);//name will not print as it will not find name but will find username as we have renamed it.

// console.log(username); // print the values of the object.
// console.log(age);
// console.log(marks);// it will show undefined
// console.log(data);

// type of array is always object
// console.log(typeof `${a}`); //string






// outer function can call the inner function but the inner function can not call the outer function.//

// function outer(){
//   console.log("outer");
//   return function inner(){
//     console.log("inner");
//   };
// }
//  let a =outer(); 
//  a();             // this will call the inner functon 


// function outer(a) {
// console.log("outer"); // outer function
// a();  
// }
// let inner = function(){
//   console.log("inner");
// };
// outer(inner); // this will call the inner function.
