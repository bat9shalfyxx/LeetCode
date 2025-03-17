function singleNumber(nums: number[]): number {
    let map = {}; //not even a map though

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    for (const key in map) {
        if (map[key] === 1) {
            return Number(key);
        }
    }

    return 0;
}
