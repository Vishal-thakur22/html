// console.log("hello this is my 1 st commit");
// const name = "John";
// console.log(name);
  
// let mame
// console.log("mame");
// console.log("hello iam vishal")



// {
//     let b =25;
//     b=21;
//     console.log(b);
// }
// for (let i = 0; i < 10; i++) { //it will print from 0-9 
//     console.log(i)   
// }
// // for (const a = 0; a < 10; a++) {
// //     console.log(a); //it will only print 0 and then will show error as const can be declared once 
// // }



// for (var b = 0; b < 10; b++) {
//     console.log(b);
// }
// console.log(b); //as variable is indipendent of the "block space"  so it will make loop in the block and then the last  b will be equal to 10 then at last the value of b will be 10 and it will be removed from the condition of loop hence  will print 10    .




// console.log(a);
// let a =21;
// console.log(a);


// let name ="vishal";

// let company="google";
// let info =(name +" "+company);       // this string concatination
//  console.log(info ,company , name);
// console.log( `my name is ${name} working in ${company}`);  //"${var}"it treats it as a variable--called as template literal



// if /else statement
 
//false value-
// undefined, null,0,"empty string",NaN,false
// let a=23;

// if (a>10) {
//     console.log("a is greater");
// } else {
//     console.log("a is smaller");
// }
// if (a<30) {
//     console.log("a is smaller")
// } else {
//     console.log("a is greater")
// }

// const a="false";
// const b="100";

// console.log ((25>15)==(15>10));  its true.  //will not work for(25>20>15) as it will read it as (true>15) which is false statement
// it will convert "true ->  number  (1)  hence it is not greater than 10" 
// id c

// let time =30;
// if (time == 10) {
//     console.log("low time");}
    
// else if (time<20) 
//     {console.log(`time is less than ${time}`);
// }
// else if(time >30)
//    {
//     console.log(`time is greater than ${time}`);
//    }
//    else {
//     console.log(`time =${time}`);
//    };
//    console.log(greating);



//    console.log(false >= 0 );
   // console.log(25>"a" );

   //switch statement--

   // let number =5;

   // switch (number) {
   //    case 5:
   //       console.log("its five");
   //       break;
   //    case 4:
   //       console.log("its 4");
   //       break;
   //    case 6:
   //       console.log("its 6");
   //       break;
   //    case 8:
   //       console.log("its 8");
   //       break;
   //    case 10:
   //       console.log("its 10");
   //       break;
   //       default:
   //          console.log(`${number} not found`);
   // }
   // alert("Don't enter the site without log in code ");// alert message on top of the site

   // let Num =(prompt("Enter a valid login code to access the dark web, else will result in system crash or malware installation!! "));
   // console.log(Num);





// console.log("hiiiii");

//    console.error("hii");
//    console.warn("helo");




// array --------->

// let arr=[1,2,3,4,5,];
// console.log(arr[4]);



//                                                   // 31/01/2025

// const arr =[1,2,3,4,5,6];
//   to do  ------->   write a program to print all elements in the array


// p2 
// //write a  program to pprint the string in reverse
// let str ="apple";//need to print elppa.
// let ans = "";
// for (let i = str.length-1; i>=0;i--)
//    {
//    ans= ans+str[i];
// }

// console.log(ans);




//p3



//                       //write a program to determine that the given vertices is a vertices of a triangle

///condition of triangle is that ---> the sum of two sides should be greater than 3 rd side

// let a=6;
// let b=6;
// let c=6;
// // if (a+b>c && a+c>b && b+c>a)  
// //    {console.log("triangle is valid ");
   
// // } else {
// //    console.log("triangle is not valid");
// // }



// //                    // check  if the triangle is equilateral , isoscelese or scalar........

// if (a==b && b==c && c==a) {
//  console.log("triangle is equilateral");  
// } else if(a==b||b==c||c==a){
//    console.log("triangle is isoscelese");
// }else{
//    console.log("triangle is scalar");
// }
   



// let a = String("abc");// string literals.
// console.log(typeof(a));

// let b = new String("abc");//string object.
// console.log(typeof(b));
// console.log("abc"==b);






//math ---gives function and many more


// console.log(Math.PI);





////                    //      write a program to generate a random integer between 1-100.

   // let a =Math.random()*100+1;
   // console.log(a);



//                                            // //to generate otp//  
                                   
// alert("click ok to generate the otp");

                                          
//  let a =Math.floor(Math.random()*1000000);  
//  if (a < 100000){
//    a=a+100000;
//  }
//  console.log(a);
//  prompt(`Your otp is ${a}`);



   //                                         // 03/02/2025



 //                / Splice ----> used to delete and insert the elements to the main string .   

//  const arr = [1,2,3,4,5,6,7,8,"ho"];
//  for (const elements of arr) {  // of-->  tells all the elements in the array..     
//    //if (element in arrr) --->  it will tell the index values

//   console.log(elements);
//    }
 

 //                                  //  displey user name to the top alert box!!!!!

// let FirstName = prompt("Enter your First name");
// let LastName = prompt("Enter your Last name");
// let mgs =`Welcome ${FirstName} ${LastName}.`;
// alert(mgs);



//                                      //to print all the elements of the array
// const arr = [
//    [1,2,3,4],
//    [4,5,6,7],
//    [7,8,9,1],
// ];

// // // to sccess 2
// // console.log(arr[0][1]);

// // // to access 5
// // console.log(arr[1][1]);

// // /// addding the value in array
// // console.log(arr[0].push(12));


//                                     // to print all elements in the aray
// for(let i=0;i<arr.length;i++){
//    for (let j = 0 ; j < arr[i].length;j++){
//       console.log(arr[i][j]);
//    }
// }

// let a=[1,2,3,4,5];
// let b=[1,2,3,4,5];
// console.log(a=b);



//             //    to fetch the elements  from the array
// let arr =["aman","amit","amin","acb","rahul"];   //destructruing of array

// // let [a1,a2,...a3]=arr; // (...c) is rest operator as it includes all the values of the arrray in it and stores them in array.

// // console.log(a1);
// // console.log(a2);
// // console.log(a3);


// // console.log(...arr);    //(...arr) it is split operator  removes all the elements from the array


// let str ="aman";
// console.log(...str);