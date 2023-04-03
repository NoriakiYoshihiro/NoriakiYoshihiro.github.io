'use strict'

// Field上での左クリックと右クリックのイベント
const configClickEventFieldAngrySweeper = {

    clickLeftEvent: (pos) => {
        // 必要ならここにコードを書く
        cellAngrySweeper.pushCell(pos);
        fieldAngrySweeper.show(cellAngrySweeper.dataToShowField);
        infoAngrySweeper.show(cellAngrySweeper.dataToShowInfo);
        cellAngrySweeper.isClearedAndDoEvent();
        // switchTextOfBtnRetry(cellAngrySweeper.isCleared());
    },

    clickRightEvent: (pos) => {
        cellAngrySweeper.raiseFlag(pos);
        fieldAngrySweeper.show(cellAngrySweeper.dataToShowField);
        infoAngrySweeper.show(cellAngrySweeper.dataToShowInfo);
        cellAngrySweeper.isClearedAndDoEvent();
    }

}