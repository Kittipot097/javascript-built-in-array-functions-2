function isPalindrome(string) {
  // Start coding here
  const convertString = string.toLowerCase();
  const reveseSting = convertString.split('').reverse().join('');
  return convertString === reveseSting;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false