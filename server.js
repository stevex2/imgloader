// //import the http module and assign it to the http var


var http =  require('http');
var url = require('url'); //url module provides methods to extract different parts of the url

//to be able to wire this script as a module we will put this code into a function we'll call start

function start(route, handle){
	function onRequest(request, response){

	
	var pathname = url.parse(request.url).pathname;
	console.log('request for ' + pathname + ' received');

	// request.setEncoding("utf8"); handled by formidable

	route(handle, pathname, response, request); //router call is only called when all POST data is gathered & sends the data to the request handlers
	

	



}
http.createServer(onRequest).listen(8800);
console.log("Server has started");

}

exports.start = start;
