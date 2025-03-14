let searchInsert = (nums: number[], target: number): number => {
    let index: number = 0;
    if (nums.includes(target)) {
        index = nums.indexOf(target);
    } else {
        let end = nums.length - 1;
        let start = 0;
        if (target > nums[nums.length]) {
            index = nums.length;
            return index;
        }
        if (target < nums[0]) {
            return 0;
        }
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] < target) {
                end = mid - 1;
            } else if (nums[end] > target && nums[start] < target) {
                index = start + 1;
                return index;
            } else start = mid + 1;
        }
        index = end;
    }
    return index;
};
