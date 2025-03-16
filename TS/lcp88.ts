function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = m; n > 0; i++) {
        n--;
        nums1[i] = nums2[n];
    }
    nums1.sort((a, b) => a - b);
}
