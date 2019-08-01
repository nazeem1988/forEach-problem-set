function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1, 2, 3]);


// IS uniform

function isUnifrom(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== first) {
            return false
        }
    }
    return true;
}
console.log(isUnifrom([1, 1, 2])); // false

// Sumarray

function SumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}
console.log(SumArray([10,10,10])) // 30

// Max()

function max(arr) {
    var max = [0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(max([10, 20, -30, 40])); //40