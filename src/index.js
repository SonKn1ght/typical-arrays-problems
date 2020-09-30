
exports.min = function min (array = []) {
    if (array.length == 0) {
        return 0
    }
    let a = array.sort((a, b) => {
        return a - b;
    })[0]
    return a;
}

exports.max = function max (array = []) {
    if (array.length == 0) {
        return 0
    }
    let a = array.sort((a, b) => {
        return b - a;
    })[0]
    return a;
}

exports.avg = function avg (array = []) {
    if (array.length == 0) {
        return 0
    }
    let a = array.reduce((acc, cur) => {
        return acc + cur;
    }, 0)/(array.length)
  return a;
}
