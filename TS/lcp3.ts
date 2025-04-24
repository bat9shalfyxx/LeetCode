let lengthOfLongestSubstring = (s: string): number => {
    let length = 0;
    let lenghtsArr: number[] = [];
    let lengthsObj = {};

    for (let i = 0; i < s.length; i++) {
        length++;

        if (s[i] === s[i + 1]) {
            if (!lengthsObj[length]) {
                lengthsObj[length] = 1;
            } else {
                lengthsObj[length]++;
            }
            length = 0;
        }
    }

    for (const el in lengthsObj) {
        if (lengthsObj[el] == 1) {
            lenghtsArr.push(Number(el));
        }
    }
    lenghtsArr.sort((a, b) => a - b);

    return lenghtsArr[lenghtsArr.length - 1];
};
