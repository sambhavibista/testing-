//JAVASCRIPTS ARRAY

//array declare
let points = new Array(3);  //object
console.log("length of array points :",points.length);
points[0] = 22;
points[1] = 32;
points[2] = 55;
points[3] = 53;            //can add index after declaring array
console.log(points[3]);
console.log(points[0]);
console.log(points.length);

let number = new Array(5,6,7);   //passing elements to array directly

console.log("length of array numbers:",number.length);
console.log(number[2]);
number[3]=77;           
console.log(number[3]);

let vehicle = ['bus','bike','van',8];   //doesn't matter the type of data 
vehicle[4] = 6;
console.log("length of array vehicles: ",vehicle.length);
console.log(vehicle[3]);                

//general for loop
for(let i=0;i<vehicle.length;i++){
    console.log(vehicle[i]);
}
//in for loop used for array
for(let a in vehicle){
    console.log(vehicle[a]);
}

//map()     //doesn't change the original data set
var result = number.map((numbers)=>numbers*10);

// var result = number.map(function(numbers){
//     return numbers*10;
// })
// var result = number.map(multiplyByTen);
// function multiplyByTen(numbers){
//     return numbers*10;
// }
 
console.log("Updated array:",result);
console.log("original array:",number);

// JAVASCRIPT OBJECTS
//everything in js is objects
console.log("JAVASCRIPTS OBJECTS");
var student = {name:"Ram",
age:"20",
address:"lalitpur",
'full name':"Ram Bahadur",
info: function(){
    return this.name +" "+ this.address;
}
};
console.log(student.name);
console.log(student['address']);
console.log(student['full name']);
console.log(student.info());


for(let b in student){
    console.log(student[b]);
}

var students = [
    {
        name:"sita",
        address:"kalanki",
        faculty:"Computer",
        semester:"5th"
     },
    {
        name:"rita",
        address:"kirtipur",
        faculty:"it",
        semester:"4th"
    },
    {
        name:"mita",
        address:"lalitpur",
        faculty:"civil",
        semester:"5th"
    },
    {
        name:"hari",
        address:"balaju",
        faculty:"Computer",
        semester:"6th"
    },
    {
        name:"bimal",
        address:"koteshower",
        faculty:"civil",
        semester:"3th"
    },
    {
        name:"gopal",
        address:"baneshwor",
        faculty:"it",
        semester:"5th"
    }
];


for(let b in students ){
console.log("\tdetail of:",students[b].name);
console.log("\taddress of:",students[b].address);
console.log("\tfaculty of:",students[b].faculty);
console.log("\tsemester of:",students[b].semester);
}






