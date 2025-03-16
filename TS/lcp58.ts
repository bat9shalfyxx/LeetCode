let lengthOfLastWord = (s: string): number => {
    let arr: string[] = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        if (arr[i] === " ") {
            arr.splice(i, 1);
            i--;
        }
    }

    console.log(arr);
    return arr[arr.length - 1].length;
};
