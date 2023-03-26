'use strict'

// HMTM areaInfoのclass,Idの命名
function getInfoClass(h) {
    return "info" + padZeroToNum(h, 2);
}
function getInfoId(v, h) {
    return "info" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[v] + padZeroToNum(h, 2);
}

function createAllBtn(settingAllBtn) {
    for (const key in settingAllBtn) {
        eBtn[key] = info.createBtn(settingAllBtn[key]);
    }
}