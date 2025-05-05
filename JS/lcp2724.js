var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

const fn = (el) => el.x;
let arr = [{ x: -1 }, { x: 0 }, { x: 1 }];

console.log(sortBy(arr, fn));
