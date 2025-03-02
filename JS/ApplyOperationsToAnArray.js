let arr = [1, 0, 0, 0, 2, 2, 0, 5, 5];
let applyOperations = (nums) => {
    let countOfZero = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            countOfZero.push(0);
            i--;
        } else if (nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    return [...nums, ...countOfZero];
};
applyOperations(arr);
// NODE ApplyOperationsToAnArray.js
