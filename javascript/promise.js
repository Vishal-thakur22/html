// write a program to return a array having the square of the numbers of the array.

const arr=[1,2,3,4,5,];

//both are same but arrow function is more concise

// const squareArr=arr.map((num)=>num**2);
// console.log("hi");
// console.log(squareArr);

 //or

// let ans =[];
// for (let element of arr){
//     ans.push(element**2);
// }
// console.log(ans);




//

// let ans = arr.filter((num)=>num%2==0);// it eleminates the odd numbers from the array.
// console.log(ans);// as 1,3,5 are odd numbers so it will print 2,4. 
// // if we use return for falsy value then it will not print the value.
// // and if true then it will print the value.


// let ans =arr.reduce(function(acc,ele){
//     console.log(acc,ele);
//     return ele+acc;
//     // how it works is:
// // 1+2
// // 3+3
// // 6+4
// // 10+5
// // 15
// });

// console.log(ans);

// or //

//  let ans = arr.reduce((acc,ele)=>acc+ele);// it will add the elements of the array.
//     console.log(ans);// 1+2+3+4+5=15.
//     //
 let ans = arr.reduce((acc,ele)=>acc+ele ,10);// with this comma we can give the initial value of the accumulator. if there is no value then it will take 0 as default. then it will work like 0+1+2+3+4+5=15.
    console.log(ans);// 10+1+2+3+4+5=25.
    //