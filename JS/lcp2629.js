const compose = (functions) => (x) => {
    let resArr = [...functions];
    if (!resArr.length) return x;
    return resArr.reduceRight((acc, fn) => fn(acc), x);
};
