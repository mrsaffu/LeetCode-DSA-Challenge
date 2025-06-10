/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyNum = x;
    let reverseNum =0;
    while(copyNum>0){
        const lastDigit = copyNum%10;
        reverseNum= reverseNum*10+lastDigit;
        copyNum=Math.floor(copyNum/10)

    }

    return x===reverseNum

    
};