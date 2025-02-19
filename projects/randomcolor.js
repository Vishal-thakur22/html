
let btn = document.querySelector('#btn');
let div1= document.querySelector('#box');
btn.onclick = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.querySelector('h1').innerHTML=`rgb(${r},${g},${b})`;
    div1.style.backgroundColor =`rgb(${r},${g},${b})`;
}; // it will change the background color of the body when the button is clicked.