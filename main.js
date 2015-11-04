console.log('its working');

var $log=$('#log');
var $prompt=$('#prompt');
var $returnKey=$('#return');

var $box=$('#box');

// $li =[command, action, ]

// $prompt.on('keypress', logResponse);

// var logResponse=function(){
// 	event.keyCode
// 	if(event.keyCode===13){
// 		var $li=$('#li');
// 	    $prompt.val();
// 	}else{

// 	}
// };

var logResponse=function(event){
	if(event.keyCode===13){
	 console.log('this is working');
	}else{
	  console.log('this is not working');
	}
};

$prompt.on('keypress', logResponse);




// var returnKeyAppend=function(){
// 	if ($prompt.textContent){
// 		console.log('this is working');
// 	}
	


