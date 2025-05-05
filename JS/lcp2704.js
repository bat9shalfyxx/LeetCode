var expect = function (val) {
    return {
        toBe(otherVal) {
            if (otherVal === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(otherVal) {
            if (otherVal !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    };
};
