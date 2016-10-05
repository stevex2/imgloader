var exec = require("child_process").exec; 	//Node.js module, child_process it allows us to use the simple non-blocking operation exec()
												//What exec() does is, it executes a shell command from within Node.js.



var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(response, postData){
	//THE IMAGE SUBMITTING FORM
		var body = '<html>'+
			'<head>'+
			'<meta http-equiv="Content-Type" '+
			'content="text/html; charset=UTF-8" />'+
			'</head>'+
			'<body>'+
			'<form action="/upload" enctype="multipart/form-data" '+
			'method="post">'+
			'<input type = "text" name = "title"><br>'+
			'<input type="file" name="upload" multiple="multiple"><br>'+
			'<input type="submit" value="Upload file" /><br>'+
			'<form/>'+
			'<body/>'+
			'</html>'


	// var body = '<HTML>'+
	// 	'<head>'+
	// 	'<meta http-equiv = "Content-Type" content = "text/html";'+
	// 	'charset=UTF-8/>'+
	// 	'<head/>'+
	// 	'<body>'+
	// 	'<form action = "/upload" method = "post">'+
	// 	'<textarea name= "text" rows="20" cols="60"> </textarea>'+
	// 	'<br><input type="submit" value="Submit Text">'+
	// 	'</form>'+
	// 	'</body>'+
	// 	'</html>';


		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	

} 
	function upload(response, request) {
		console.log("Request handler 'upload' was called.");
		var form = new formidable.IncomingForm();
		console.log("about to parse");
		form.parse(request, function(error, fields, files) {
			console.log("parsing done");
				
				 // Possible error on Windows systems:tried to rename to an already existing file 
			fs.rename(files.upload.path, "/tmp/mycv.png", function(error) {
				if (error) {
				fs.unlink("/tmp/mycv.png");
			 	fs.rename(files.upload.path, "/tmp/mycv.png");
			 			}
			 	});
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write("received image:<br/>");
			response.write("<img src='/show' />");
			response.end();
		});
}
function show(response){
	console.log("Request handler 'show' was called");
	response.writeHead(200, {"Content-Type":"image/png" });
	fs.createReadStream("/tmp/mycv.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;



















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