// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.


function reverseInt(n){
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}

// --- Examples
  console.log(reverseInt(15)) === 51
  console.log(reverseInt(981)) === 189
  console.log(reverseInt(500)) === 5
  console.log(reverseInt(-15)) === -51
  console.log(reverseInt(-90)) === -9

  function reverseInt(n){
    return(parseInt(n.toString().split("").reverse().join("")) * Math.sign(n));
}

console.log(reverseInt(15))
