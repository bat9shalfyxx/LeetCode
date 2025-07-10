let checkIfInstanceOf = (obj, classFunction) => {
    while (obj !== null) {
        if (obj.constructor === classFunction) return true;

        obj = Object.getPrototypeOf(obj);
    }
    return false;
};

console.log();

// let checkIfInstanceOf = (obj, classFunction) => {
//     if (obj.constructor === classFunction) {
//         console.log("find");
//     }
//     if (obj === classFunction) {
//         return false;
//     }

//     if (typeof classFunction !== "object" || typeof classFunction !== "function") {
//         return false;
//     }

//     if (typeof obj !== "object" || typeof obj !== "function") {
//         return Object.prototype.toString.call(obj) === `object ${classFunction}`;
//     }

//     return obj instanceof classFunction;
// };

// let num = [];
// console.log(num.__proto__);
// console.log(typeof "");

// console.log(Number instanceof Number);
// console.log(checkIfInstanceOf(5, Number));

// console.log(new Date() instanceof Date);
// let date = new Date();
// class p {
//     a = 1;
// }
// let pp = new p();
// console.log(pp.constructor);
// console.log(pp.constructor === p);
// checkIfInstanceOf(pp, p);
