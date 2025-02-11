// function helloworld(fn) 
// { console.log("hello");
//     fn();
// }
// function byee(){                   //higher order function//
//     console.log("byee");
// }
// helloworld(byee);  


//               //write a function to return a function which checks odd or even //



//   function oddOrEven(check){
//     if (check =="odd"){
//         return function(n){
//             if (n%2==0){
//                 return false;
//             }else{
//                 return true;
//             }
//           };
// }
//     else if (check=="even"){
//      return function(n){
//     if (n%2!==0){
//         return false;}
// else{
//     return true;
//      }
//      };
//     }
// }
// let checkOdd = oddOrEven("odd");
// let checkEven = oddOrEven("even");

// console.log(checkOdd(4));
// console.log(checkEven(4));




//

//

//

//                                        //settime out function//
// function sayhello(){
//     console.log("hello");  // normal function
// }

// const sayhello=()=>{      //arrrow function
//     console.log("hello");
// }

// setTimeout(sayhello,4000); // after 4000ms it will print hello

// setInterval(function(){
//     console.log("byee");  it will  print it after 4 sec  to infinite.
// }, 4000);

// let id = setInterval(function(){
//     console.log("byee");
//     }, 1000);   
//     // clearInterval(id); // to stop the interval function

//     // clearInterval(id);
//     // console.log("id",id);
//     setTimeout(()=>{
//         clearInterval(id);
//         }, 5033.34); // after 5 sec it will stop the interval function 
    
//



//           //  11/02/2025   //

// event loop--->
function timeConsumingByLoop() {
    console.log("loop starts");
    for (let i = 0; i < 1000000000; i++) {
      // some task
    }
    console.log("loop ends");
  }
  
  function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    setTimeout(function exec() {
      console.log("Completed the timer0");
      for (let i = 0; i < 1000000000; i++) {
        // some task
      }
    }, 5000); // 5 sec timer
  }
  
  function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec() {
      console.log("Completed the timer1");
    }, 0); // 0 s timer
  }
  
  function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec() {
      console.log("Completed the timer2");
    }, 200); // 200 ms timer
  }
  
  console.log("Hi");
  timeConsumingByLoop();
  timeConsumingByRuntimeFeature0();
  timeConsumingByRuntimeFeature1();
  timeConsumingByRuntimeFeature2();
  timeConsumingByLoop();
  console.log("By");
  


