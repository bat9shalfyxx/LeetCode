function areAlmostEqual(s1: string, s2: string): boolean {
    let s1Splitted: string[] = s1.split("");
    let s2Splitted: string[] = s2.split("");
    let difCharsIndicesArr: number[] = [];
    let isSwappable: boolean = false;
    let difCharsCount: number = 0;
    if (s1 == s2) return true;
    else if (s1.length == s2.length) {
        for (let i: number = 0; i < s1.length; i++) {
            if (s1Splitted[i] != s2Splitted[i]) {
                difCharsIndicesArr.push(i);
                difCharsCount++;
                if (difCharsCount > 2) return false;
            }
        }
        if (difCharsIndicesArr.length == 2) {
            let s2Rejoined = [...s2Splitted];
            s2Rejoined[difCharsIndicesArr[0]] = s2Splitted[difCharsIndicesArr[1]];
            s2Rejoined[difCharsIndicesArr[1]] = s2Splitted[difCharsIndicesArr[0]];
            if (s2Rejoined.join("") == s1Splitted.join("")) {
                isSwappable = true;
            }
        }
    } else {
        console.log("The lines are not the same length.");
    }
    return isSwappable;
}
console.log(areAlmostEqual("bank", "kanb"));
