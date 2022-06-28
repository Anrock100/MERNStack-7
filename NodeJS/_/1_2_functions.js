// module.exports = {
//     myFunction : function(){
//         console.log("Hello world of js");
//     }
// };

var f1 = function(){
    console.log("Hello world of js");
}
var f2 = function(num1, num2){
    return num1 + num2;

}
var f3 = function(...nums){
    //read individual value from nums, calculate total and return
    var sum = 0;
    for (var item of nums){ //access index
        sum+=Number(item);
    }
    return sum;
}
function f4(num1){
    //calculate and return factorial 
    //of number using recrusive function
    if(num1 == 1){
        return 1;
    }
    else {
        return num1 * f4(num1-1);
    }
}
//io
var f5=function(){
    
}
module.exports = {f1, f2, f3, f4};

