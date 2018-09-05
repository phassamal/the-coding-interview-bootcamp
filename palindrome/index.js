// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.


function palindrome(str) {
    const reversed = str.split("").reverse().join("");

    return str === reversed;
}

// --- Examples:
  console.log(palindrome("abba"));
  console.log(palindrome("abcdefg"));