const once = (fn) => {
    let hasBeenCalled = false;
    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            return fn(...args);
        }
        return undefined;
    };
};
