let removeDuplicates = (nums: number[]): number => {
    let k: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3]));
