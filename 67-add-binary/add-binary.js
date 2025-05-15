/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0
    let result = ""
    const max = Math.max(a.length, b.length)

    for (let i = 0; i < max; i++) {
        aBit = a[a.length - 1 - i] ? parseInt(a[a.length - 1 - i]) : 0
        bBit = b[b.length - 1 - i] ? parseInt(b[b.length - 1 - i]) : 0

        let sum = aBit + bBit + carry
        result += (sum % 2)
        carry = Math.floor(sum/2)
    }

    if(carry != 0){
        result += '1'
    }

    return result.split('').reverse().join('')

};