/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let count = map1.get(s[i]) || 0;
        map1.set(s[i], ++count);
    }
    
    for (let i = 0; i < t.length; i++) {
        let count = map2.get(t[i]) || 0;
        map2.set(t[i], ++count);
    }

    if (map1.size !== map2.size) {
        return false;
    }
    
    for(let [key, value] of map1.entries()) {
        if (value !== map2.get(key)) {
            return false;
        }
    }
    
    return true;
};


isAnagram("a",
"ab");