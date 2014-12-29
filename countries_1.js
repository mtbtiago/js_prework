// Write a function that receives an array of names and returns them in a string 
// with , between them. The final two must be separated by and.

function foo(ar) {
    var result = "";
    for (var i = 0; i < ar.length; i++) {
        if (i == 0) {
            result = ar[i];
        } else if (i == ar.length - 1) {
            result = result + " and " + ar[i];
        } else {
            result = result + ", " + ar[i];
        }
    }
    return result;
}

var names = ["Canada", "Mexico", "Turkey", "Japan"];
console.log(foo(names));

var names = ["Canada"];
console.log(foo(names));

var names = ["Canada", "Mexico"];
console.log(foo(names));

var names = ["Canada", "Mexico", "Turkey"];
console.log(foo(names));
