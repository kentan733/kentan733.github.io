var secret_number = prompt("Guess the secret number")
if(secret_number < 30){
	alert("too low")
}
else if(secret_number > 30){
	alert("too high")
}
else{
	alert("That's correct! Congratulations!")
}