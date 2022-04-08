function myMutation(arr) {
    var boolean;
    var wordOne = arr[0].toLowerCase();
    var wordTwo = arr[1].toLowerCase().split("");

    for (i = 0; i < wordTwo.length; i++) {
        if (wordOne.indexOf(wordTwo[i]) == -1) {
            boolean = false;
            return boolean;
        } else {
            boolean = true;
        }
    }
    return boolean;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;