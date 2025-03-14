function strStr(haystack: string, needle: string): number {
    let result: number  = -1;
    let countOfSameChars = 0;
    if (haystack.length >= needle.length) {
            for (let i = 0; i < haystack.length; i++) {
                if(haystack[i] === needle[countOfSameChars]) {
                    countOfSameChars++
                } else {
                    i -= countOfSameChars;
                    countOfSameChars = 0;
                }
                if(countOfSameChars === needle.length) {
                    result = i - (countOfSameChars - 1);
                    break
                }
            }
    }
    return result;
}
console.log(strStr("aabaabbbaabbbbabaaab", "abaa"));

//      cd LeetCode/TS
//      tsc firstOccurencex