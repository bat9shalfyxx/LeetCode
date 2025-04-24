/////////////kinda working:
// let myPow = (x, n) => {
//     if (x === 0) {
//         return 0;
//     }
//     if (n === 0) {
//         return 1;
//     }

//     let res = x;

//     if (n > 0) {
//         for (let i = 0; i < n - 1; i++) {
//             res *= x;
//             console.log(res);
//         }
//     } else {
//         res *= -n;
//         return 1 / res;
//     }

//     return res;
// };

///////////stolen (*exponentional by squaring*):
let myPow = (x, n) => {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let res = 1;
    while (n > 0) {
        if (n % 2 === 1) res *= x;
        x *= x;
        n = Math.floor(n / 2);

        console.log(x + "  |  " + n);
    }
    return res;
};

console.log(myPow(2, 15));
