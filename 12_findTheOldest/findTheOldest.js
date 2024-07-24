const findTheOldest = function(peoples) {
    peoples.sort((a, b) => {
        let first = (a.yearOfDeath ? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth;
        let second = (b.yearOfDeath ? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth;
        
        return first > second ? -1 : 1;
    })
    return peoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
