'use strict'

class Logger {
    #log;
    #eIdAreaLog;

    constructor() {
        this.#log = "";
        this.#eIdAreaLog = document.getElementById("areaLog");
    }

    // // 引数を表示するのみ
    // flash(argLog) {
    //     this.#eIdAreaLog.innerText = argLog;
    //     console.log(argLog);
    // }

    // 累積記録を表示する
    show(...argLogs) {
        let str;
        if (argLogs.length === 0) {
            str = this.#log;
        } else {
            str = joinString("\n", ...argLogs);
        }
        this.#eIdAreaLog.innerText = str;
        console.log(str);
    }


    clear() { this.#log = ""; }

    // 最初に改行判断して累積
    addln(newLog) { if (this.#log === "") this.#log = newLog; else this.#log += "\n" + newLog; }

    // 単純に累積する
    add(newLog) { this.#log += newLog; }

    // 前の記録を消して今回の記録
    clearAdd(newLog) {
        this.clear();
        this.add(newLog);
    }

    addEq(name, value) { this.addlin(`${name} = ${value}`); }
}