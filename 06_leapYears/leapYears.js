const leapYears = function(number) {
    if (number % 100 == 0 ) {
        number /= 100;
    }
    if (number % 4 == 0){
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
