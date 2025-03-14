const arr: number[] = [-55, -10, -4, -2, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 9, 9, 12, 13, 14, 19, 44, 121, 282];
let searchRange = (nums: number[], target: number): number[] => {
    let start: number = 0;
    let end: number = nums.length - 1;
    let found: boolean = false;
    let indexOfFirsAppear: number = -1;
    const allElems: number[] = [];
    const elemsPos: number[] = [];
    while (!found && start <= end) {
        let middle: number = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            indexOfFirsAppear = nums.indexOf(target);
            found = true;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else if (target > nums[middle]) {
            start = middle + 1;
        }
    }
    if (indexOfFirsAppear == -1) {
        elemsPos.push(-1, -1);
    } else {
        for (let i = indexOfFirsAppear + 1; nums[i] === target; i++) {
            allElems.push(nums[i]);
        }
        elemsPos.push(indexOfFirsAppear, indexOfFirsAppear + allElems.length);
    }
    console.log(allElems);
    return elemsPos;
};
console.log(searchRange(arr, 55));
//     LCP34
