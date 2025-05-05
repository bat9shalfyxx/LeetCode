var createCounter = (n) => {
    return (counter = () => {
        return n++;
    });
};
createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter()); 


function some(...args) {
    console.log(...args);
    // return x + y;
}
some(222,2,2,2,2,2,"1221", [1,2], false, null, undefined, NaN, Infinity);
let arr = [1, 2];
let arr2 = [1, 2, ...arr];