var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
    var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(myArr));
module.exports = bubbleSort;