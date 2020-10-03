
exports.min = function min(array = []) {
    let min = array[0];
    if (array.length == 0) return 0;
    for (let current of array) {
        if (current < min) min = current;
    }
    return min;
}

exports.max = function max(array = []) {
    let max = array[0];
    if (array.length == 0) return 0;
    for (let current of array) {
        if (current > max) max = current;
    }
    return max;
}

exports.avg = function avg(array = []) {
    let avg = 0;
    if (array.length == 0) return 0;
    for (let current of array) {
        avg += current;
    }
    avg /= array.length;
    return avg;
}
