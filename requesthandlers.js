var exec = require("child_process").exec; 	//Node.js module, child_process it allows us to use the simple non-blocking operation exec()
												//What exec() does is, it executes a shell command from within Node.js.


function start(){
	console.log("Request handler 'start' was called.");
	
	exec("ls -lah", function (error, stdout, stderr){

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	} );

	return content; 
	
} 

function upload(){
	console.log("Request handler 'upload' was called.");
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello upload");
		response.end();
}

exports.start = start;
exports.upload = upload;




















// function start(){

// 	console.log("Request handler 'start' was called.");
// 	function sleep(milliseconds){
// 		var startTime = new Date().getTime();                   					
// 		while (new Date().getTime() < startTime + milliseconds);
// 	}
// 	sleep(10000);
// 	return "hello start";
// 	  this example code is to demonstarate why the obvious way(i.e from a background of PHP Ruby and others :-))of making the request handlers
// 	return() the content
// they want to display to the user, and send this response data in the onRequest function back to the
// user. is not such a good idea, because we will run into problems if one the
// request handlers wants to make use of a non-blocking operation in the future.  here we see the upload request handler isnt set
// to delay for 10 seconds but will,
// }