// //node js always works in callback function,( single threaded, asynchornous )
// //faster than others
// //doesnot waits for any acknowledgement -> asynchornous
// //NaN, undefined, null -> variable ko value




// var a=6;
// var b='c';
// console.log(b);

// var d="c";
// console.log(d);

// var e='hello';
// console.log(e);

// //number and string can be concatinated
// var a=10;
// var b="20";
// console.log(a+b);

// var a=10;
// var b=20;
// console.log("the sum of two number is "+(a+b) +"\tthis is okey");
// //(know the name of this term) "template literal"
// console.log(`the sum of two numbers is ${a+b} . This is okay`);

// function display(){
//     console.log("i am general function / normal function");
// }

// // display();

// //parametrized constructor
// function display(a,b){
//     console.log("i am general function / normal function."+(a+b));
// }
// display(5,6);

// //default
// function display(a,b=80){
//     console.log("i am general function / normal function."+(a+b));
// }
// display(5);

// function display(a,b=80){
//     // console.log("i am general function / normal function."+(a+b));
//     return a-b;

// var sum = display(5 ,'6');
// console.log(`Sum value is ${sum}.`);



//var, let and const keywords

console.log("var keyword.");
var x=20;
var x=30; //var can redefine variable
console.log(x);
x=40;  //can  re-assign variable value
console.log(x);



//both const and let are block scope and var is functional


function display(){
    if(true){
        var y=99;
        console.log(y);
    }
    console.log(y);
    console.log(x);
}
// console.log(y);   //this is not applicable 
display();

console.log("let keyword.");
// let p; 
//p = 50;      // allowed
let p = 50;
// let p = 500;   //can't redeclare variables using let keyword
p=400;     //allowed to re-assign value of the variable  using let keyword
console.log(p);
function show(){
    if(true){
        let r=300;
        console.log(r);
    }
    // console.log(r);   // not allowed, because let is a block scope
    if(true){
        let r=600;
        console.log(r);   
    }
}
show();
console.log("const keyword.");
// const c;       //not allowed
const c = 80;       //must initialize variable
console.log(c);
// const  c= 40;   //re-declaration is not allowed
// c = 900;     //re-assigning of the variable is also not allowed
function visible(){
    if(true){
        const u = 700;
        console.log(u);
    }
    // console.log(u);   // const is also a block scoped, variable with const keyword are not allowed to access from outside of block
    if(true){
        const u = 777;
        console.log(u);
    }
}
visible();

console.log("nullish Coalescing Operator.");
var t;
var h = null ?? "this is not allowed";     ///used for conditional rendering
console.log(h);


var i = console.log("hello");
console.log(i);
// console.log(t);
var m = 21;
var msg = m==11 ?"equal":"not equal";
console.log(msg);

