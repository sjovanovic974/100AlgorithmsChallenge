var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function arrayConversion(inputArray) {
    var reducedArr = [];
    var iteration = 1;
    while (inputArray.length !== 1) {
        for (var i = 0; i < inputArray.length; i += 2) {
            if (iteration % 2 !== 0) {
                if (i < inputArray.length - 1) {
                    reducedArr.push(inputArray[i] + inputArray[i + 1]);
                }
                else {
                    reducedArr.push(inputArray[i]);
                }
            }
            else {
                if (i < inputArray.length - 1) {
                    reducedArr.push(inputArray[i] * inputArray[i + 1]);
                }
                else {
                    reducedArr.push(inputArray[i]);
                }
            }
        }
        inputArray = __spreadArrays(reducedArr);
        reducedArr = [];
        iteration++;
    }
    return inputArray[0];
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 3, 2, 2, 1, 3, 3, 2]));
