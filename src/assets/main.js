let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess').value;
    //add functionality to guess function here
    //alert(input);
    if(attempt.value==""){
    	setHiddenFields();
    }
    //alert("answer: "+answer.value);
    if(!validateInput(input)){
    	return false;
    }else{
    	attempt.value++;
    }
    if(getResults(input)){
    	setMessage("You Win! :)");
    }else if(!getResults(input)&&attempt.value>=5){
    	setMessage("You Lose! :(");
    }else{
    	setMessage("Incorrect, try again.");
    }
}

function getResults(result){
	let input = '<div class="row"><span class="col-md-6">';
	let countChars = 0;

	for(let i=0;i<4;i++){
		if(result[i]==answer.value[i]){
			input+='<span class="glyphicon glyphicon-ok"></span>';
			countChars++;
		}else {
			if(result[i]==answer.value[0]||result[i]==answer.value[1]||result[i]==answer.value[2]||result[i]==answer.value[3]){
				input+='<span class="glyphicon glyphicon-transfer"></span>';
			}else{
				input+='<span class="glyphicon glyphicon-remove"></span> ';
			}
		}
	}
	input += '</span><div class="col-md-6">';
	//alert(input);
	document.getElementById("results").innerHTML = input;
	if(countChars==4){
		return true;
	}else{
		return false;
	}
	
}
/*

*/

//implement new functions here
function setHiddenFields(){
	code = "";
	for(let i=0; i<4;i++){
		code+=Math.floor(Math.random()*10);
	}
	//alert("code: "+code);
	attempt.value=0;
	//alert("attempt.value: "+attempt.value);
	answer.value=code;
	//alert("answer.value: "+answer.value);
}

function setMessage(message){
	document.getElementById("message").innerHTML = message;
}

function validateInput(answer){
	if(answer.length==4){
		return true;
	}else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function showAnswer(winning){
	document.getElementById("code").innerHTML = answer.value;
	if(winning){
		document.getElementById("code").className += " success";
	}else{
		document.getElementById("code").className += " failure";
	}
}

function showReplay(){

}

