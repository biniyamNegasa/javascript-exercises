const getTheTitles = function(list) {
    let ans = [];
    for (let obj of list){
        ans.push(obj.title);
    }
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
