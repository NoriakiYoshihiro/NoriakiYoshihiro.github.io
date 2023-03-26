'use strict'

class FieldBase extends TableCreator {
    // 定義マスト　TableCreatorでの作成テーブルの各tdのclassの命名ルール
    configOfTable = {
        className: (v, h) => "cell",
        id: (v, h) => "cell" + padZeroToNum(v * hSize + h, 2),
        clickEvent: (v, h) => () => pushCellAndShow(v * hSize + h)
        // 上記アローは以下と同じ
        // clickEvent: function (v,h) { return function () { pushCellAndShow(v * hSize + h);}; }
    }

    show(status) {
        for (let i = 0; i < cSize; i++) {
            const v = posToV(i);
            const h = posToH(i);
            const statusNum=status[i];
            this.td[v][h].style.backgroundColor = statusBGColor[statusNum];
            this.td[v][h].innerText = statusSymbol[statusNum];
        }
    }
};




