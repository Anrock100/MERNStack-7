// url Module
// const url = require("url");
// const reqUrl ="http://127.0.0.1:8000/add?num1=12&num2=32";
// const reqObj = url.parse(reqUrl, true);

// console.log(reqObj.protocol); //http
// console.log(reqObj.host);  //127.0.0.1
// console.log(reqObj.port);  //8000
// console.log(reqObj.pathname); // /add
// console.log(reqObj.search); // ?num1=12&num2=32
// dataObj = reqObj.query; //num1=12&num2=32
// console.log(dataObj); //num1=12&num2=32
// console.log(dataObj.num1);
// console.log(dataObj.num2);

//querystring Module
var url = require("url");
var querystring = require("querystring");

const reqUrl ="http://127.0.0.1:8000/add?num1=12&num2=32";
var qstr = url.parse(reqUrl);
var querystr = qstr.query;
var queryObj = querystring.parse(querystr);
console.log(queryObj.num1);
console.log(queryObj.num2);