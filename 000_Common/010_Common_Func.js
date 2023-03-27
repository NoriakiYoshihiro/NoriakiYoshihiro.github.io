'use strict'

function vhToPos(v, h) { return v * hSize + h; }
function posToV(pos) { return Math.floor(pos / hSize); }
function posToH(pos) { return pos % hSize; }

// 大きさを確定させた2次元配列を作成する
function createBoxArray(vsize, hsize) {
    const array = [];
    for (let v = 0; v < vsize; v++) {
        const arrayH = [];
        for (let h = 0; h < hSize; h++) arrayH.push("");
        array.push(arrayH);
    }
    return array;
}


function countSomethingInArray(something, array) {
    let count = 0;
    array.forEach(x => { if (x === something) count++; });
    return count;
}

function joinString(separator, ...array) {
    const n = array.length;
    if (n === 0) return "";
    if (n === 1) return array[0];
    let str = array[0];
    for (let i = 1; i < n; i++) str += separator + array[i];
    return str;
}

// セル番号など桁数を揃えたいときに
function padZeroToNum(num, fig) {
    return num.toString().padStart(fig, "0");
}


const logConsole = {
    black: "\u001b[30m",
    red: "\u001b[31m",
    green: "\u001b[32m",
    yellow: "\u001b[33m",
    blue: "\u001b[34m",
    magenta: "\u001b[35m",
    cyan: "\u001b[36m",
    white: "\u001b[37m",

    report: (str) => console.log(logConsole.green + "[Report] " + str),
    event: (str) => console.log(logConsole.yellow + "[Event] " + str),
    alert: (str) => console.log(logConsole.red + "[Alert] " + str)
}