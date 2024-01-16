// https://ekantipur.com/news/2024/01/10/170487488742768805.html
// const  axios = require("axios");

// async function getdata(){
//     let response = await axios.get("https://ekantipur.com/news/2024/01/10/170487488742768805.html")
//         console.log(response);
// };
//     // console.log(response);
//     console.log("hellloo");
// getdata();

// const  axios = require("axios");

//  function getdata(){
//     let response = axios.get("https://ekantipur.com/news/2024/01/10/170487488742768805.html").then((response) => {
//         console.log("promise resolved");
//         // console.log(response);
//     });
//     console.log(response);
//     console.log("hellloo");
// }
// getdata();

 function delay1(){
    // console.log("i am delay");
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("i am delayed too");
            resolve("delay1");
            // reject();
        },5000);
    })
    return promise;
    
}

// function fast(){
//     console.log("i am fast");
// }

// delay1().then(() => {
//     console.log("resolved");

// }).catch((error) => {
//     console.log("rejected");
// }).finally(() => {
//     console.log("finally is executed");
// });
// fast();

 function delay2(){
    // console.log("i am delay");
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("i am delayed too");
            resolve("delay2");
            // reject(delay2);
        },5000);
    })
    return promise;
    
}
// delay2().then(() => {
//     console.log("resolved");
// }).catch((error) => {
//     console.log("rejected");
// });

function delay3(){
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("i am delayed too");
            resolve("delay3");
            // reject();
        },5000);
    })
    return promise;
    
}

// delay3().then(() => {
//     console.log("resolved");
// }).catch((error) => {
//     console.log("rejected");
// });

 function delay4(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("i am delayed too");
            resolve("delay4");
            // reject();
        },5000);
    })
    return promise;
    
}

// delay4().then(() => {
//     console.log("resolved");
// }).catch((error) => {
//     console.log("rejected");
// });

 function delay5(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("i am delayed too");
            resolve("delay5");
            // reject();
        },10000);
    })
    return promise;
    
}

// delay5().then(() => {
//     console.log("resolved");
// }).catch((error) => {
//     console.log("rejected");
// });

// async function run_data(){
//     let d1 = await delay1();
//     console.log(d1);
//     let d2 = await delay2();
//     console.log(d2);
//     let d3 = await delay3();
//     console.log(d3);
//     let d4 = await delay4();
//     console.log(d4);
//     let d5 = await delay5();
//     console.log(d5);

    // let promise = [];
    // promise.push(delay1();)
    // promise.push(delay2();)
    // promise.push(delay3();)
    // promise.push(delay4();)
    // promise.push(delay5();)

//     let res = await Promise.all([
//         delay1(),
//         delay2(),
//         delay3(),
//         delay4(),
//         delay5()
//     ]);
//     console.log(res);
// }

// run_data();


// delay1().then(function(data){
//     console.log(data);
// })
// delay2().then(function(data){
//     console.log(data);
// })
// delay3().then(function(data){
//     console.log(data);
// })
// delay4().then(function(data){
//     console.log(data);
// })
// delay5().then(function(data){
//     console.log(data);
// })




// delay1().then(function(data){
//     console.log(data);
//     delay2().then(function(data){
//         console.log(data);
//         delay3().then(function(data){
//             console.log(data);
//             delay4().then(function(data){
//                 console.log(data);
//                 delay5().then(function(data){
//                     console.log(data);
//                 })
//             })
//         })
//     })
// })

//constructor function 
function Data(name,age){
    this.name = name;
    this.age = age;

    this.getName = function(){ 
        return this.name;
    }
    // this.getAge = function(){
    //     return this.age;
    // }
}
Data.prototype.getAge = function(){
    return this.age;
}

let data1 = new Data('sam',21);
let data2 = new Data('ram',25);
let data3 = new Data('jam',19);

// console.log(data1.getName());
// console.log(data2.getAge());

//temporer dead zone  
// console.log(name);
// const name ="hello" ;
// console.log(name);
// name ="hello world";
// console.log(name);


//closure
// let name ="sam";
// function person(){
//     // let name ="sam";
//     function run(){
//         console.log(name);
//     }
//     run();
// }
// person();




