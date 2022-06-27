//create server
//receive pathname
//based on pathname display html content

// / -> content of home page
// /index -> content of home page
// /home -> content of home page
// /about -> content of about us page
// /services -> content of services page
// /contact -> content of contact us page

//lipsum.com -> free content

var http = require('http');
var url = require('url');


// /
// /home
// /index
content1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada enim quis lacus tincidunt finibus. Nullam sagittis massa sit amet neque mollis lobortis. Donec luctus neque ut justo faucibus ultrices. Pellentesque et lacinia eros. Curabitur varius porta nunc, sed condimentum nisi dapibus nec. Aliquam vitae est non nulla molestie fringilla. Integer lacinia, ante at vehicula posuere, urna enim cursus tellus, sed mollis justo tortor tincidunt metus. Aliquam feugiat venenatis justo, sed pretium nunc interdum et. Quisque arcu mauris, sollicitudin ac viverra id, elementum placerat risus. Nam id magna eu justo vulputate egestas eu in odio. Suspendisse elementum dapibus aliquet. Quisque at dolor blandit, scelerisque nisi nec, varius nisl. Nunc egestas porttitor felis sed ornare.'
// /about
content2 = 'In ac tincidunt odio. Praesent sed velit et leo hendrerit auctor eget in erat. Donec sagittis nunc ac elementum congue. Proin lacinia finibus arcu vel pellentesque. Aliquam molestie metus ultrices quam sollicitudin, ut condimentum erat hendrerit. Cras aliquam augue quis lectus feugiat, vel feugiat augue laoreet. Phasellus egestas risus nec arcu consequat, eget mattis neque maximus. Nulla fringilla eleifend dui, quis maximus metus interdum eu. Aliquam ex leo, ultrices eget justo vel, cursus blandit magna. Integer id leo in mauris lacinia venenatis. Vivamus orci orci, facilisis semper massa ac, vulputate cursus leo. Donec mauris purus, vulputate eu interdum auctor, vestibulum non nulla.';

var server = http.createServer((req, res)=>{
        // var objUrl = url.parse(req.url, true);
        // var command = objUrl.pathname;
        // if((command==='/') || (command==='/home') || (command==='/index')){
        //     res.write("<h1>Welcome to mysite</h1>");
        //     res.write("<p>"+content1+"</p>");
        //     res.end();
        // }
        //.....
});
server.listen(8000, '127.0.0.1');
