'use strict'

class CellSmileAll {
    // ==== プライベートフィールド ====
    #stage; // ステージ番号
    #initialStatus; // そのステージの最初のセル配置情報
    #status; // 現在のセル配置情報
    #countOfPush; // プッシュ回数

    constructor() {
        this.#stage = 1;
    }
    // ==== プロパティ ====

    // #stage へのアクセス
    get stage() { return this.#stage; }
    set stage(num) { this.#stage = num; }
    get stageName() { return `Stage#${this.#stage}`; }
    // #initialStatus へのアクセス
    get initialStatus() { return this.#initialStatus; }
    // #status へのアクセス
    get status() { return this.#status; }
    get statusForShow() {
        let result=[];
        // 生#statusにはアクセスせずこちらから
        result=this.#status.map(x=>x);
        return result;
    }
    // #countOfPush へのアクセス
    get countOfPush() { return this.#countOfPush; }

    // smile,angryの計数
    get numOfSmile() { return countSomethingInArray(statusNum.smile, this.#status); }
    get numOfAngry() { return countSomethingInArray(statusNum.angry, this.#status); }

    // ==== メソッド ====

    cellName(c) { return `Cell#${padZeroToNum(c, 2)}`; }

    // ステージの最初にinitialStatusを読み込む
    setInitialStatus() {
        this.#initialStatus = createInitialCell(this.#stage).map(x => x);
        logConsole.report(`${this.stageName} initial status data setting completed successfully.`);
        console.log(makeSymbolString(this.#initialStatus));
    }

    // ステージ開始とリセット
    tryOrRetry(str) {
        this.#status = this.#initialStatus.map(x => x);
        this.#countOfPush = 0;
        logConsole.report(`${this.stageName} ready.` );
        logger.show(str);
    }
    try() {
        this.tryOrRetry(`Now you try ${this.stageName}.`);
    }
    retry() {
        this.tryOrRetry(`Now you retry ${this.stageName} again.`);
    }
   
    //プッシュ処理
    pushCell(pos) {
        const cellName=this.cellName(pos);
        logConsole.event(`${cellName} clicked.`);
        if (!this.isReversible(pos, direct.self)) return;
        let log="";
        logger.clearAdd(`Push ${cellName}, counter increased to ${++this.#countOfPush}.`);
        for (const key in direct) { this.reverseCell(pos, direct[key]); }
        logger.show();
    }

    //プッシュ処理の反転処理
    reverseCell(pos, directNum) {
        if (!this.isReversible(pos, directNum)) return false;

        const targetPos = pos + directNum;
        let statusBefore;
        let statusAfter;
        switch (this.#status[targetPos]) {
            case statusNum.smile: {
                statusBefore = statusNum.smile;
                statusAfter = statusNum.angry;
                break;
            }
            case statusNum.angry: {
                statusBefore = statusNum.angry;
                statusAfter = statusNum.smile;
                break;
            }
        }
        if (statusBefore !== undefined) {
            this.#status[targetPos] = statusAfter;
            logger.addln(`${this.cellName(targetPos)} ${statusSymbol[statusBefore]} turned into ${statusSymbol[statusAfter]}.`);
        }
        return true;
    }

    isReversible(pos, directNum) {
        if (directNum === direct.upper && pos < hSize) return false;
        if (directNum === direct.left && pos % hSize === 0) return false;
        if (directNum === direct.right && pos % hSize === hSize - 1) return false;
        if (directNum === direct.lower && pos >= hSize * (vSize - 1)) return false;
        const status = this.status[pos + directNum];
        if (status === statusNum.smile || status === statusNum.angry) return true; else false;
    }

    // クリア条件 numOfAngry=0かどうか
    isCleared() {
        return this.numOfAngry === 0;
    }

    isClearedAndDoEvent() {
        if (this.numOfAngry !== 0) return false;
        logger.show("!! CONGRATURATIONS !!", `Stage ${this.#stage} cleared!!`);
        return true;
    }

    // 次のステージへ行く処理
    goToNextStage() {
        this.#stage++;
        this.setInitialStatus();
        logger.show(`Now you try stage ${this.#stage}!`);
    }
}

