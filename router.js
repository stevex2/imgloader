// Making different HTTP requests point at different parts of our code is called “routing” - well, then,
// let’s create a module called router.

function route(handle, pathname, response){

	console.log("About to request for "+ pathname);
	if (typeof handle[pathname] === 'function'){
		return handle[pathname](response);

// Because we can access our request handler functions from
// our object just as we would access an element of an associative array, we have this nice fluent
// handle[pathname]();

	} else {
		console.log("no request handler for "+ pathname);
		return "404 not found";
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
 	
 //export this as an thing called route
 exports.route = route;