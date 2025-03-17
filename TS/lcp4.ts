let findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    let unitedArr = [...nums1, ...nums2];

    let recursiveSort = (arr: number[]): number[] => {
        if (arr.length <= 1) return arr;

        let pivotIndex = Math.floor(arr.length / 2);
        let pivot = arr[pivotIndex];
        let less: number[] = [];
        let greater: number[] = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) {
                continue;
            }
            if (arr[i] < pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }
        return [...recursiveSort(less), pivot, ...recursiveSort(greater)];
    };

    let sortedArr = recursiveSort(unitedArr);
    let middle = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 1) {
        return sortedArr[middle];
    } else {
        return (sortedArr[middle] + sortedArr[middle - 1]) / 2;
    }
};
