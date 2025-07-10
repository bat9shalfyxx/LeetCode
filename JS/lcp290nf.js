/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
    let map = new Map();
    let sepparatedS = s.split(" ");
    if (pattern.length !== sepparatedS.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            map.set(pattern[i], sepparatedS[i]);
        }
    }

    for (const el in map) {
        console.log(el + map[el] + ".");
    }
    console.log(map.size);

    return true;
};

wordPattern("abcba", "doat at done lpl");
/*
gonna need Map collection or simple object, within wich i am 
gonna contain the letter of `pattern` as a key and a word in `s` as value; 
*/
