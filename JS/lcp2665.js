var createCounter = function (init) {
    let res = init;
    return {
        increment() {
            res++;
            return res;
        },
        decrement() {
            res--;
            return res;
        },
        reset() {
            res = init;
            return res;
        },
    };
};
