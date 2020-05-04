const cool = require("cool-ascii-faces");
const express = require("express");
const bodyParser = require("body-parser");

//APIS:
const imcapi = require(path.join(__dirname,"imcapi"));
const sugarconsumeAPI = require(path.join(__dirname,"sugarconsumeAPI"));

var app = express();

var port = process.env.PORT || 321;

app.use("/",express.static("./public"));

app.get("/cool",(request,response) => {
	response.send("<html>"+cool()+"</html>");
});

app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");