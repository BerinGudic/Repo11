var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var monitorsList = [];
    var arr = monitorsListArray;
    for (i = 0; i < arr.length; i++) {
        monitorsList.push([arr[i], i + 1]);
    }
    return monitorsList;
}
console.log(myMonitorsFunction());
module.exports = myMonitorsFunction;