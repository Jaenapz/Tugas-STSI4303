//051375001
// a = 1
// b = 5
// n = 10
function printDeret(a, b, n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(a + i * b);
    }
    console.log("Deret aritmatika :", result.join(" "));
}
printDeret(1, 5, 10);
