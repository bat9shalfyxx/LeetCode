var ArrayWrapper = function (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((summ, curr) => summ + curr, 0);
};

ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(",")}]`;
};

let arr = [1, 2, 3, 15, 19, 21, 32];
let arr2 = new ArrayWrapper([23, 98, 42, 70]);
let arr3 = new ArrayWrapper([1, 2, 3]);

console.log(arr2 + arr3);
console.log(ArrayWrapper(arr));
console.log(arr2.toString());
