const repeatString = function(stringToRepeat, num) {
    if (num < 0) return "ERROR";
    let returnedString = "";
   
    for(let i=0; i<num; i++){
        returnedString += stringToRepeat;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
