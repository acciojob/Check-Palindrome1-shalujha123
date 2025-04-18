// complete the given function

function palindrome(str){
	let rev = str.split("").reverse().join("")
	if(rev === str){
		return true
	}else{
		return false
	}
}
module.exports = palindrome
