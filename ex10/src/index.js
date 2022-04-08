function myBouncer(arr) {
    return arr.filter(x=> x>0 | typeof(x)=="string" &&x!="");
 
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;