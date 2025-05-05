const filter = (arr, fn) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (fn(el, i)) {
            res.push(el);
        }
    }
    return res;
};
