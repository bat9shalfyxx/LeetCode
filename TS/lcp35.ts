let searchInsert = (nums: number[], target: number): number => {
    let index: number = 0;
    if (nums.includes(target)) {
        index = nums.indexOf(target);
    } else {
        let end = nums.length - 1;
        let start = 0;

        if (target > nums[end]) {
            index = nums.length;
            return index;
        }

        if (target < nums[start]) {
            return start;
        }

        if (nums.length >= 2) {
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (nums[mid] > target) {
                    end = mid - 1;
                } else start = mid + 1;
            }

            if (nums[start] < target) {
                index = start + 1;
                console.log("1");
                return index;
            }
            index = start;
        }
    }
    return index;
};
