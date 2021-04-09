/**
 * What is expected ?
 * 1) Given an array flatten it, i.e. if an array has sub arrays then flattening
 *    it should result in an array that would have all elements at the same level
 *    ex: [1, 2, [3, [4]] ] --> [1, 2, 3, 4]
 * 2) If a depth is provided then the depth should be taken into account while
 *    flattening
 * 3) Make the function available to all array instances
 */

const flatten = (array, maxDepth = Infinity, currentDepth = 0) => {
    if (maxDepth === currentDepth) {
        // we do not want to flatten because the desired depth is reached
        return array;
    } else {
        const flattenReducer = (accumulator, currentValue) => {
            const recurse =
                Array.isArray(currentValue) && currentDepth < maxDepth;
            return accumulator.concat(
                recurse
                    ? flatten(currentValue, maxDepth, currentDepth + 1)
                    : currentValue
            );
        };

        return array.reduce(flattenReducer, (initialValue = []));
    }
};

if (!Array.prototype.flatten) {
    Array.prototype.flatten = function (maxDepth = Infinity) {
        return flatten(this, maxDepth);
    };
}

module.exports = flatten;
