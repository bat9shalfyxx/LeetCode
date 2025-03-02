function strStr(haystack, needle) {
    var haystackSplitted = haystack.split("");
    var needleSplitted = needle.split("");
    var longest = needleSplitted.length > haystackSplitted.length ? needleSplitted.length : haystackSplitted.length;
    var shortest = needleSplitted.length < haystackSplitted.length ? needleSplitted.length : haystackSplitted.length;
    var occurence = [];
    var countOfSameChars = 0;
    loop1: for (var i = 0; i < longest; i++) {
        if (haystackSplitted[i] == needleSplitted[i]) {
            occurence.push(i);
            countOfSameChars++;
            console.log(occurence);
            console.log(countOfSameChars);
            if (countOfSameChars == shortest) {
                break loop1;
            }
        } //else countOfSameChars = 0;
    }
    // if (countOfSameChars == shortest) {
    //     return occurence[0];
    // } else return -1;'
    return -1;
}
console.log(strStr("1sadbutsad", "sad"));
// let strStr = (haystack: string, needle: string): number => {
//     const haystackSplitted: string[] = haystack.split("");
//     const needleSplitted: string[] = needle.split("");
//     let arrOfSameChars: number[] = [];
//     for (let i = 0; i < haystackSplitted.length || i < needleSplitted.length; i++) {
//         if (haystackSplitted[i] == needleSplitted[i]) {
//             arrOfSameChars.push(i);
//             console.log(arrOfSameChars);
//         }
//     }
//     return -1;
// };
// strStr("11leetcode", "leetc");
//firstOccurence
