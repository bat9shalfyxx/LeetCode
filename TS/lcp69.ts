// let mySqrt = (x: number): number => {
//     if (x === 0 || x === 1) {
//         return x;
//     }
//     let left = 1;
//     let right = x;

//     while (left <= right) {
//         let mid = left + (right - left) / 2;

//         if (mid * mid == x) {
//             return mid;
//         }

//         if (mid * mid > x) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return Math.round(right);
// };
/////////////////////////////////////unfair implementation:
let mySqrt = (x: number): number => {
    return Math.floor(Math.sqrt(x));
};
