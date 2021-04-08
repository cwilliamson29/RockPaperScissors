function capitalize(string){
    let first = string.charAt(0).toUpperCase();
    let last = string.slice(1) // + string.charAt(1).toLowerCase();
    let lastLower = last.toLowerCase();

    console.log(first + lastLower)
}
function lastLetter(string){
    let letter = string.slice(-1);

    console.log(letter)
}