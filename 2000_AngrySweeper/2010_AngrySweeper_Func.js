'use strict'

function makeSymbolString(statusArray, vSize, hSize) {
    let resultStr = "";
    for (let v = 0; v < vSize; v++) {
        if (resultStr.length > 0) resultStr += "\n";
        for (let h = 0; h < hSize; h++) {
            const c = statusArray[v * hSize + h];
            resultStr += statusSymbol[c];
        }
    }
    return resultStr;
}


