'use strict'

class InfoBase extends TableCreator {
    // 定義マスト　TableCreatorでの作成テーブルの各tdのclassの命名ルール
    configOfTable = {
        className: function (v, h) { return getInfoClass(h); },
        id: function (v, h) { return getInfoId(v, h); },
        clickEvent: (v, h) => () => { } // 何もしない関数を値として返す
    }

    giveClassName(v, h) {
        return getInfoClass(h);
    };
    // 定義マスト関数　TableCreatorでの作成テーブルの各tdのIdの命名ルール
    giveId(v, h) {
        return getInfoId(v, h);
    }

    createBtn(settingBtn) {
        const el = document.createElement("button");
        el.innerText = settingBtn.text;
        el.addEventListener(settingBtn.event, settingBtn.func, false);
        this.td[settingBtn.vhOfInfo[0]][settingBtn.vhOfInfo[1]].appendChild(el);
        return el;
    }
}


