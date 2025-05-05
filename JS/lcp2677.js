const chunk = (arr, size) => {
    let containableSubArrays = Math.floor(arr.length / size);
    const resArr = [];

    for (let i = 0; i < containableSubArrays; i++) {
        let el = [];
        for (let i = 0; i < size; i++) {
            subEl = arr.shift();
            el.push(subEl);
        }
        resArr.push(el);
    }

    return arr.length ? [...resArr, [...arr]] : resArr;
};

let newArr = new Array(16).fill(1);
console.log(chunk(newArr, 5));
