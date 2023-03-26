'use strict'


// ボタンの生成
const eBtn = {};

const settingAllBtn = {
    Retry: {
        text: "Retry",
        event: "click",
        func: clickEventOfBtnRetry,
        vhOfInfo: [4, 0]
    },
    TryNext: {
        text: "Try Next",
        event: "click",
        func: clickEventOfBtnTryNext,
        vhOfInfo: [4, 1]
    },
    Exit: {
        text:"Exit",
        event: "click",
        func: clickEventOfBtnExit,
        vhOfInfo: [5,1]
    }
}
createAllBtn(settingAllBtn);


// リトライボタンは状態で活性、不活性化
function switchTextOfBtnRetry(isCleared) {
    const el=eBtn.TryNext;
    if (!isCleared && !el.disabled) { //クリアしてない 且つ 活性状態
        eBtn.TryNext.disabled = true;
        eBtn.TryNext.style.backgroundColor = "lightgrey";
        logConsole.report("Set Button \"Retry\" diabled.");
    } else if (isCleared && el.disabled) {
        eBtn.TryNext.disabled = false;
        eBtn.TryNext.style.backgroundColor = "pink";
        logConsole.report("Set Button \"Retry\" abled.");
    }
}


// click Retryボタン
function clickEventOfBtnRetry() {
    logConsole.event("Button \"Retry\" clicked.");
    cell.retry();
    field.show(cell.statusForShow);
    info.show(cell);
    switchTextOfBtnRetry(false);
}

// click TryNextボタン
function clickEventOfBtnTryNext() {
    logConsole.event("Button \"Try Next\" clicked.");
    if (!cell.isCleared) return;
    cell.goToNextStage();
    cell.try();
    field.show(cell.statusForShow);
    info.show(cell);
    switchTextOfBtnRetry(false);
}

// click Exitボタン
function clickEventOfBtnExit() {
    logConsole.alert("Button \"Exit \" clicked.");
    const result = window.confirm("Do you really exit this game?");
    logConsole.event(`Dialog closed and result is \'${result}\'.`);
    if (result) {
        logger.show("Please come back soon", "See you again! ");
        logConsole.event("This game \'Smill All\' is closing.")
        document.location.href = "index.html";
    }
}