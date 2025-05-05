const isEmpty = (obj) => {
    if (obj instanceof Array) {
        for (const el of obj) {
            return false;
        }
    } else if (obj instanceof Object) {
        for (const el in obj) {
            return false;
        }
    }
    return true;
};

console.log(isEmpty({}));
let obj = {};
console.log(obj instanceof Object);
// console.log(isEmpty([1, 2]));
