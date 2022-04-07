function myNestedFunction(arr) {
    var arr = [["Toblerone", 5], ["Milka", 3]];
    myNestedArray = arr;
    return myNestedArray;
}
var myNestedArray = [[], []];

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;