// fetch('https://dummyjson.com/products/1')
//   .then(response => response.json())
//   .then(function (data){
//     const [a,_,c,...rest] = data.images;     //rest operator
//     console.log(a);
//     console.log(_);
//   })

//   //spread operator
//   let num1 = [1,2,3,4,5];  
//   let num2 = [6,7,8,9,10];
//   let combined_num = [...num1,...num2];
//   console.log(combined_num);  


//object
// const student ={
//     name:"sam",
//     age:22,
//     faculty:"science",
//     address:{
//         country:"nepal",
//         city:"kathmandu",
        // getaddress: function(){
        //    return this.city;
        // }
//     }
//     // address:"kalanki",
   
// }
// console.log(student.address.getaddress?.());      //optional chaining in a function call

// const {name:firstName,age,faculty} = student;
// console.log(firstName);
// console.log(address)

// const teacher={
//     names:"ram",
//     address:"kirtipur",
// }

// let combined = {...student,...teacher};
// console.log(combined);

    // const {
    //   images
    // } = data;


    // const image1 = images[0];
    // const image2 = images[1];
    // const image3 = images[2];
    // const image4 = images[3];
    // const thumbnailImage = images[4];

//     console.log(`Image 1: ${image1}`);
//     console.log(`Image 2: ${image2}`);
//     console.log(`Image 3: ${image3}`);
//     console.log(`Image 4: ${image4}`);
//     console.log(`Thumbnail Image: ${thumbnailImage}`);
//   })

//   .catch(error => console.log('Error in fetching data:'));



// fetch('https://dummyjson.com/recipes/tag/pakistani')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log);
            


/* providing token in bearer */
fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
  }, 
})
.then(res => res.json())
.then(console.log);