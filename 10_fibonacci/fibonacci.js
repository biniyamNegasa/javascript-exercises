const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num < 2) return num;
    a = 0;
    b = 1;
    for (let i = 0; i < num-1; i++){
        temp = a;
        a = b;
        b += temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
