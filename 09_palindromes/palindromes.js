const palindromes = function (string) {
    let list = [];
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const zero = '0'.charCodeAt(0);
    const nine = '9'.charCodeAt(0);

    for (let ch of string){
        let val = ch.charCodeAt(0);

        if (val <= nine && val >= zero){
            list.push(ch);
        }
        else if (val <= Z && val >= A){
            list.push(ch.toLowerCase());
        }
        else if (val <= z && val >= a){
            list.push(ch);
        }
    }
    n = list.length;
    i = 0;
    j = n - 1;
    while (i < j){
        if (list[i] !== list[j]) return false;
        i += 1
        j -= 1
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
