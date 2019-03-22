module.exports = function check(str, bracketsConfig) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (str[i] === bracketsConfig[j][0]) {

                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                    if (bracketsConfig[j][0] === arr[arr.length - 1]) {
                        arr.pop();
                    } else {
                        arr.push(str[i]);
                    }
                } else {
                    arr.push(str[i]);
                }

            } else if (str[i] === bracketsConfig[j][1]) {
                if ((arr[arr.length - 1] === bracketsConfig[j][0])) {
                    arr.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return arr.length ? false : true;
};
