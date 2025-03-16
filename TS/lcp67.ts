let addBinary = (a: string, b: string): string => {
    let string: string = String(BigInt(a) + BigInt(b));
    let array: number[] = [];

    for (let i = 0; i < string.length; i++) {
        array.push(Number(string[i]));
    }

    for (let i = array.length - 1; i > 0; i--) {
        if (array[i] === 2) {
            array[i] = 0;
            array[i - 1]++;
        }
        if (array[i] === 3) {
            array[i] = 1;
            array[i - 1]++;
        }
    }

    if (array[0] == 2) {
        array[0] = 0;
        array.unshift(1);
    }
    if (array[0] === 3) {
        array[0] = 1;
        array.unshift(1);
    }

    return array.join("");
};
