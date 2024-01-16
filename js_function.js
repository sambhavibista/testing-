function sum(){
    let a =20;
    let b=30;
    let sum = a+b;
    console.log(sum);
}
sum();

//anonymous function
var sum = function(){
    let a =60;
    let b=30;
    let sum = a+b;
    console.log(sum);
}
sum();

//arrow function
// it cannot be used in this function // doesnot have access to this 
var sum = ()=>{
    let a =60;
    let b=70;
    let sum = a+b;
    console.log(sum);
}
sum();
function addition(r,s){
    console.log(`the sum is ${r+s}.`);
}
addition(4,7);

var add = (r,s)=>console.log(`the sum is : ${r+s}`);
add(4,9);

var addd = function(r,s){
    console.log(`the sum is = ${r+s}.`);
}
addd(9,8);

//callback  function  using arrow function concepts
setTimeout(() => {
    console.log("all good");
},2000);     //it calls itself after 2 sec.

//general function concept
setTimeout(welcome,3000);
function welcome(){
    console.log("hello welcome");
}

//anonyoumous concept
setTimeout(function(){
    console.log("i am anonymous function");
},4000);
    


