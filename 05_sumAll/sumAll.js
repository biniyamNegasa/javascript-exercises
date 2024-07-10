const sumAll = function(start, end) {
    if (typeof start != 'number' || typeof end != 'number' ||
        start < 1 || end < 1
    ) {
        return 'ERROR';
    }
    if (start > end ) {
        temp = start;
        start = end;
        end = temp;
    }
    start -= 1;
    // sum formula
    return (end*(end+1))/2 - (start*(start+1))/2;
};

// Do not edit below this line
module.exports = sumAll;
