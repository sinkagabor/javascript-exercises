function isNumber(b)
{
    return isNaN(b)||typeof(b)!=="number"?false:true;
}

const sumAll = function(first, last) {
    let result = 0;

    if(!isNumber(first) || !isNumber(last) || first < 0 || last < 0){
        return "ERROR";
    }

    if(first > last){
        let temp = last;
        last = first;
        first = temp;
    } 

    let x = +first;
    let y = +last;
    let i = x;

    while(i>= x && i<=y){
        result +=i;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
