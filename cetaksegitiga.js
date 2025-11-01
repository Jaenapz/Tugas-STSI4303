//NIM : 051375001
function printSegitiga(height) {
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}
printSegitiga(5);
