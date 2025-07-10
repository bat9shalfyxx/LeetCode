let compactObject = (obj) => {
    if (obj instanceof Array) {
        let res = {};
        for (let i = 0; i < obj.length; i++) {
            if (obj[i]) {
                res[i] = obj[i];
            }
        }
        return res;
    }

    Object.entries(obj).filter(([key, value]) => value != false);
};
