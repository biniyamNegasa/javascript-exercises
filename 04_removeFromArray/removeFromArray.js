const removeFromArray = function(list, ...items) {
    const filteredArray = [];

    for (const element of list) {
        if (!isFound(items, element)) {
            filteredArray.push(element);
        }
    }

    return filteredArray;

};

function isFound(items, element) {
    for (const item of items) {
        if (item == element) return true;
    }
    return false;
}

// Do not edit below this line
module.exports = removeFromArray;
