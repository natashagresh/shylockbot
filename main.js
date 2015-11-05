console.log('its working');

var $log=$('#log');
var $prompt=$('#prompt').val();
var $ducats=10000;

var $box=$('#box');


var logResponse=function(event){
	var $prompt=$('#prompt').val();
	if(event.keyCode===13){
	 console.log($prompt);
	 var $li= $('<li>');
	 if ($prompt === 'purse'){
	   	$log.append($li);
	   	$li.text('Shylock pulls out his purse containing ' + $ducats + ' ducats');
        $('#prompt').val("");
	} else if ($prompt.split(' ')[0] === 'loan'){
	    $log.append($li);
	    var name= $prompt.split(' ')[1];
	    console.log('name');
	    var number=$prompt.split(' ')[2];
	    console.log('number');
	    // ('$prompt'=== )
	    // for(var i=0; i< loanArray.length; i++)   {
	   	// if(parseInt(loandArray[i])) {
	   	// loanAmount=parseInt(loanArray[i]);
        // var balanceCounter=$ducats-lendMoney;
	   	$li.text('ShylockBot gives ' + name + ' ' + number + ' ducats');
        $('#prompt').val("");
	}
}
};

$(document).on('keypress', logResponse);

// var lendMoney=function(event){
// 	var $prompt=$('#prompt').val();
// 	if(event.keyCode===13){
// 	 console.log($prompt);
// 	 var $li= $('<li>');
// 	  var loanArray = $prompt.split(" ");
// 	   for(var i=0; i< loanArray.length; i++)   {
// 	   	if(parseInt(loandArray[i])) {
// 	   		loanAmount=parseInt(loanArray[i]);
// 	   		break;
// 	   	}
// 	   }if($prompt.input===)
// 	}
// };




// var shylock={
// 	purse: 100000,
// 	process: function(input){
// 	if (input === 'ledger') {
// 		console.log(shylock.purse);
// 	}else{
// 	    logOutput(shylock.purse,"action");
// 	}
// 	}
// };

// var logOutput=function(messages, type) {
// 	var $output = $('<li>');
// 	    $output.text('message');
// 	    $output.addClass(type);
// 	    var $log=$('#log');
// 	    $log.appendChild($output);
// }


// $prompt.on('keypress', logResponse);






// var returnKeyAppend=function(){
// 	if ($prompt.textContent){
// 		console.log('this is working');
// 	}
	


