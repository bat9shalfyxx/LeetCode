let longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 1) {
        return strs[0];
    }
    let prefix = strs[0];
    let prefixLen = prefix.length;
    for (let i = 1; i < strs.length; i++) {
        while (prefix !== strs[i].substring(0, prefixLen)) {
            prefixLen--;
            if (prefixLen === 0) return "";
            prefix = prefix.substring(0, prefixLen);
        }
    }
    return prefix;
};
