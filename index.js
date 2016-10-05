//now to import server.js and the functionality of starting the server
//also import everything else

var server = require("./server"); //importing the modules
var router = require("./router");
var requesthandlers = require("./requesthandlers");

var handle = {};

handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload; 
handle["/show"] = requesthandlers.show;

server.start(router.route, handle); //We can now start our app via our main script, and it still does exactly the same


