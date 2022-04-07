var myStr = "Paragon is the best!";

function useMethods(str) {
    var str = myStr.split("");
    str.reverse();
    var myReverse = str.join("");
    var countCharacters = myReverse.split(" ").map(w => w.length);
    return { myReverse, countCharacters };
}
console.log(useMethods());
module.exports = useMethods;