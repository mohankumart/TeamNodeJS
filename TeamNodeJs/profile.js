/**
 * New node file
 */
var https = require("https");

function get(username){
	var request = https.get("https://teamtreehouse.com/"+username+".json",function(response){
	 	var testData = "";
		response.on('data',function(data){
			testData += data;
		});
		response.on('end',function(){
			var profile = JSON.parse(testData);
			console.log("Profile---->"+"points: "+profile.points.total);
		});
	});

	request.on('error',function(error){
		console.error(error.message);
	});
}

module.exports.get = get;