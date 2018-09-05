// --- Directions
// Given a string, return a new string with the reversed
// order of characters


function reverse(str) {
    return str.split("").reverse().join("");
}

// --- Examples
console.log(reverse('hello'));


function reverse(str) {
    let reversed = "";
    for(var i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
return reversed;
}
console.log(reverse('hello'));

