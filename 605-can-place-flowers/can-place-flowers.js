/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if (n === 0) {
        return true
    }

    if (flowerbed.length === 1) {
        if (flowerbed[0] === 0 && n === 1) {
            return true
        } else if (flowerbed[0] === 0 && n === 0) {
            return true
        }
        else {
            return false
        }
    }


    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0) {
            if (flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
                flowerbed[0] = 1
                n -= 1
            }
            continue
        } else if (i === (flowerbed.length - 1)) {
            if (flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0) {
                flowerbed[flowerbed.length - 1] = 1
                n -= 1
            }
            continue;
        } else {
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== 1) {
                flowerbed[i] = 1
                n -= 1
                continue
            }
        }
    }

    return n <= 0 ? true : false
};