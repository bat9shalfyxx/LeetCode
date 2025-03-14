let isValid = (s: string): boolean => {
    let stack: string[] = [];
    const brackets: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else {
            let popped = stack.pop();
            console.log(popped + ": " + s[i]);
            console.log(brackets[s[i]]);
            if (brackets[s[i]] !== popped) {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};
