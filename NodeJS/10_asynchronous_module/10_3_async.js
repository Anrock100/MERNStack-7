// Example-1
/*
console.log("start .....");
console.log("processing .....");
console.log("end .....");
*/

// Example-2
/*
console.log("start .....");
setTimeout(()=>{
    console.log("processing .....");
}, 2*1000);
console.log("end .....");
*/

// Example-3
/*
let num1 = 5;
let num2 = 0;
setTimeout(()=>{
    b=9;
}, 1*1000);
console.log(num1+num2);
*/

// Example-4
/*
let a=20;
let b=0;
let waitingData= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})
waitingData.then((data)=>{
   b=data;
   console.log(a+b)
})
*/