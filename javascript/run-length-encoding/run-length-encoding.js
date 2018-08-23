export const encode = (str) => {

    var resultStr = '';

    if (str == '') {
        return resultStr;
    }

    var index = 0;
    resultStr = ''

    while (index < str.length) {

        var ch = str.charAt(index);
        var amount = 0;

        for (var i = index; i < str.length; i++) {
            if (str.charAt(i) == ch) {
                amount++;
            } else {
                break;
            }
        }

        if (amount == 1) {
            resultStr = resultStr + ch;
        } else {
            resultStr = resultStr + amount + ch;
        }

        index = index + amount;

    }
    return resultStr;
};
export const decode = (str) => {

    var result = ''
    if (str == '') return result;

    var index = 0;

    while (index < str.length) {

        if (isNaN(parseInt(str.charAt(index)))) {

            result = result + str.charAt(index);
            index = index + 1;

        } else {

            var strAmount = "";

            for (var i = index; i < str.length;i++) {

                if (isNaN(parseInt(str.charAt(i)))) {
                    index=index+1;

                    if(parseInt(strAmount)>0 ) {

                        result = result + str.charAt(i).repeat(parseInt(strAmount));

                    }
                    else{

                        result = result +str.charAt(i);

                    }
                     
                    strAmount="";
                    continue;
                }
                else{

                    strAmount = strAmount + parseInt(str.charAt(i));

                }
                index=index+1;
            }
        }
    }
    return result;
};
