var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function areAlmostEqual(s1, s2) {
    var s1Splitted = s1.split("");
    var s2Splitted = s2.split("");
    var difCharsIndicesArr = [];
    var isSwappable = false;
    var difCharsCount = 0;
    if (s1 == s2)
        return true;
    else if (s1.length == s2.length) {
        for (var i = 0; i < s1.length; i++) {
            if (s1Splitted[i] != s2Splitted[i]) {
                difCharsIndicesArr.push(i);
                difCharsCount++;
                if (difCharsCount > 2)
                    return false;
            }
        }
        if (difCharsIndicesArr.length == 2) {
            var s2Rejoined = __spreadArray([], s2Splitted, true);
            s2Rejoined[difCharsIndicesArr[0]] = s2Splitted[difCharsIndicesArr[1]];
            s2Rejoined[difCharsIndicesArr[1]] = s2Splitted[difCharsIndicesArr[0]];
            console.log(s2Splitted[0]);
            console.log(s2Rejoined.join(""));
            console.log(s1Splitted);
            console.log(difCharsIndicesArr);
            if (s2Rejoined.join("") == s1Splitted.join("")) {
                isSwappable = true;
            }
        }
    }
    else {
        console.log("The lines are not the same length.");
    }
    return isSwappable;
}
console.log(areAlmostEqual("bank", "kanb"));
// isSwappable
// function areAlmostEqual(s1: string, s2: string): boolean {
//     let s1Splitted: string[] = s1.split("");
//     let s2Splitted: string[] = s2.split("");
//     let isSwappable: boolean = false;
//     if (s1 == s2) return true;
//     else if (s1.length == s2.length) {
//         for (let i: number = 0; i < s1.length; i++) {
//             for (let j: number = 0; i < s2.length; i++) {
//                 let s1Rejoined: string[] = s1.split("");
//                 let s2Rejoined: string[] = s2.split("");
//                 s1Rejoined[i] = s2Splitted[j];
//                 s2Rejoined[i] = s1Splitted[j];
//                 if (s2Rejoined.join("") == s1Rejoined.join("")) {
//                     isSwappable = true;
//                 } else {
//                     console.log(`${s1Rejoined} | ${s2Rejoined}`);
//                     s1Rejoined = s1.split("");
//                     s2Rejoined = s2.split("");
//                 }
//             }
//         }
//     } else {
//         console.log("strings aren't have equal length");
//     }
//     return isSwappable;
// }
// console.log(areAlmostEqual("bank", "kanb"));
// isSwappable
