const repeatString = function(string, number) {
    if (number < 0) return 'ERROR';
    let currentString = '';
    for (let i = 0; i < number; i++) {
        currentString += string;
    }

    return currentString;
};

// Do not edit below this line
module.exports = repeatString;
