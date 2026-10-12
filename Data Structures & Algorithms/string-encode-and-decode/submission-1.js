class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for(let s of strs){
            str += s.length + '#' + s;
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let i = 0;
        let len = '';
        while(i < str.length){
            if(str[i] === '#'){
                strs.push(str.slice(i+1, i+Number(len)+1));
                i = i+Number(len)+1;
                len = '';
            }  else {
                len += str[i];
                i++;
            }   
        }

        return strs;
    }
}
