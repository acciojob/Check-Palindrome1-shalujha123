// complete the given function

function palindrome(str){
	let cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
	let revStr = cleanStr.split("").reverse().join("")
	return cleanStr === revStr
}
module.exports = palindrome
