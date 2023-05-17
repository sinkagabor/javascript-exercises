const removeFromArray = function(removeFromThis, ...manyArgs) {
    const removedArray = removeFromThis;
    const len = removeFromThis.length;
    const argLen = manyArgs.length;
    for(let i=0; i<len; i++){
        for(let j = 0; j< argLen; j++)
        {
            if(removedArray[i] === manyArgs[j]){
                removedArray.splice(i, 1);
                i--;
            }
        }
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
