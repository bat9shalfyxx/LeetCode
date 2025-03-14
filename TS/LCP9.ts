let isPalindrome = (x: number): boolean => {
    let isPalindrome: boolean = false;
    let stringX: string = String(x);
    let reverseStringX: string = String(x).split("").reverse().join("");
    if (stringX === reverseStringX) isPalindrome = true;
    return isPalindrome;
};
let str = "sdsdajol";
