// //import the http module and assign it to the http var
// var http = require('http');

// //http module has a function createServer which returns an object which has a listen method
// //createServer object takes an anonymous function as a parameter
// http.createServer(function(request, response){
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello world");
// 	response.end();
// }).listen(8888);


var http =  require('http');
var url = require('url'); //url module provides methods to extract different parts of the url

//to be able to wire this script as a module we will put this code into a function we'll call start

function start(route, handle){
	function onRequest(request, response){
		
	var pathname = url.parse(request.url).pathname;
	console.log('request for ' + pathname + ' received');
	route(handle, pathname, response);


}
http.createServer(onRequest).listen(8800);
console.log("Server has started");

}

exports.start = start;
