let twoSum = (nums: number[], target: number): number[] => {
    const indices: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                indices.push(i, j);
            }
        }
    }
    return indices;
};
