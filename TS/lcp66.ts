///////////////////////////////////////braindead implementation:
// let plusOne = (digits: number[]): number[] => {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if(digits[i] < 10 && digits[i + 1] === 0) {
//             break;
//         }
//         if ( i === 0 && digits[i] >= 9) {
//             digits[0] = 0;
//             digits.unshift(1);
//             break;
//         }
//         if (digits[i] >= 9) {
//             digits[i] = 0;
//             digits[i - 1]++;
//             console.log(digits[i])
//             if(digits[i - 1] == 10 && digits[i - 1] !== 0) {
//                 digits[i - 1] == 0;
//             }
//         } else {
//             digits[i] += 1
//             break;
//         }
//     }
//     return digits;
// };
///////////////////////////////////////normal one:
let plusOne = (digits: number[]): number[] => {
    let int = BigInt(digits.join(""));
    int++;
    console.log(int);
    let str = String(int);
    let arr: number[] = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    return arr;
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
