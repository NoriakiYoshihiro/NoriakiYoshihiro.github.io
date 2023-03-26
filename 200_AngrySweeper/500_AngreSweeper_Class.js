'use strict'

class CellAngrySweeper {
    // ==== プライベートフィールド ====
    #initialStatus=[]; // そのステージの最初のセル配置情報
    #status=[]; // 現在のセル配置情報
    #swept=[];
    #countOfPush; // プッシュ回数
    #isFailed;

    // ==== プロパティ ====

    // #initialStatus へのアクセス
    get initialStatus() { return this.#initialStatus; }
    // #status へのアクセス
    get status() { return this.#status; }
    // #sweep
    get swept() { return this.#swept; }

    get statusForShow() {
        const result=this.#swept.map(x=>x);
        if (this.#isFailed) {
            for (let i=0;i<cSize; i++) {
                if (this.#status[i]===statusNum.angry) result[i]=statusNum.angry;
            }
        }
        return result;
    }
    // #countOfPush へのアクセス
    get countOfPush() { return this.#countOfPush; }
    // isFailed へのアクセス
    get isFailed() { return this.#isFailed; }



    // smile,angryの計数
    get numOfSmile() { return countSomethingInArray(statusNum.smile, this.#status); }
    get numOfAngry() { return countSomethingInArray(statusNum.angry, this.#status); }

    // Angryの初期の数
    initialNumOfAngry = Math.floor(cSize / 4);

    // ==== メソッド ====

    cellName(c) {
        const v = padZeroToNum(posToV(c));
        const h = padZeroToNum(posToH(c));
        return `Cell#${v}-${h}`;
    }

    // ステージの最初にinitialStatusを読み込む
    setInitialStatus() {
        for (let i = 0; i < cSize; i++) this.#initialStatus.push(statusNum.smile);
        for (let i = 0; i < this.initialNumOfAngry; i++) {
            let num;
            while (true) {
                num = Math.floor(Math.random() * cSize);
                if (this.#initialStatus[num] === statusNum.smile) { break; }
            }
            this.#initialStatus[num] = statusNum.angry;
        }
        logConsole.report(`Initial status setting completed successfully.`);
        console.log(makeSymbolString(this.#initialStatus))
    }

    // ステージ開始とリセット
    tryOrRetry(str) {
        this.#status = this.#initialStatus.map(x => x);
        this.#swept=[];
        for (let i = 0; i < cSize; i++) this.#swept.push(statusNum.nonClicked);
        this.#countOfPush = 0;
        this.#isFailed=false;
        logConsole.report(`Stage ready.`);
        logger.show(str);
    }
    try() {
        this.tryOrRetry(`Now you try.`);
    }
    retry() {
        this.tryOrRetry(`Now you retry again.`);
    }


    //プッシュ処理
    pushCell(pos) {
        const cellName = this.cellName(pos);
        if (this.#swept[pos]!==statusNum.nonClicked) {
            logConsole.event("{cellNum} clicked.(Already cliecked)")
            return;
        }
        // Angryだったら
        if (this.#status[pos] === statusNum.angry) {
            this.#isFailed=true;
            return;
        }
        // 周辺のAngryを数える
        this.#swept[pos] = -this.countOfAngryArround(pos)
        logConsole.event(`${cellName} clicked.`);
        logger.show(`Push ${cellName}, counter increased to ${++this.#countOfPush}.`);
    }

    //プッシュ処理の反転処理
    countOfAngryArround(pos) {
        let countOfAngry=0;
        for (const key in direct) {
            let directNum=direct[key];
            if (!this.isSweepable(pos,directNum)) continue;
            if (this.#status[pos+directNum]===statusNum.angry) { countOfAngry++; } 
        }
        return countOfAngry;
    }

    isSweepable(pos, directNum) {
        if (directNum === direct.UpL && (pos < hSize || pos % hSize === 0)) return false;
        if (directNum === direct.upper && pos < hSize) return false;
        if (directNum === direct.UpR && (pos < hSize || pos % hSize === hSize - 1)) return false;

        if (directNum === direct.left && pos % hSize === 0) return false;
        if (directNum === direct.right && pos % hSize === hSize - 1) return false;

        if (directNum === direct.LoL && (pos >= hSize * (vSize - 1) || pos % hSize === 0)) return false;
        if (directNum === direct.lower && pos >= hSize * (vSize - 1)) return false;
        if (directNum === direct.LoR && (pos >= hSize * (vSize - 1) || pos % hSize === hSize-1)) return false;
        return true;
    }

    // クリア条件 numOfAngry=0かどうか
    isCleared() {
        return this.#countOfPush+this.initialNumOfAngry===cSize;
    }

    isClearedAndDoEvent() {
        if (!this.isCleared()) return false;
        logger.show("!! CONGRATURATIONS !!", "Stage cleared!!");
        return true;
    }

    // 次のステージへ行く処理
    goToNextStage() {
        this.setInitialStatus();
        logger.show(`Now you try new stage again!`);
    }
}

