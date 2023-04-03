'use strict'

const configButtonAngrySweeper = {
    Retry: {
        vhOfInfo: [6, 0],
        text: "Retry",
        event: "click",
        func: () => {
            logConsole.event("Button \"Retry\" clicked.");
            cellAngrySweeper.retry();
            fieldAngrySweeper.show(cellAngrySweeper.dataToShowField);
            infoAngrySweeper.show(cellAngrySweeper.dataToShowInfo);
        }
    },
    TryNext: {
        vhOfInfo: [6, 1],
        text: "Try Next",
        event: "click",
        func: () => {
            logConsole.event("Button \"Try Next\" clicked.");
            // if (!cellAngrySweeper.isCleared) return;
            cellAngrySweeper.setInitialStatus();
            cellAngrySweeper.try();
            fieldAngrySweeper.show(cellAngrySweeper.dataToShowField);
            infoAngrySweeper.show(cellAngrySweeper.dataToShowInfo);
        }
    },
    Exit: {
        vhOfInfo: [7, 1],
        text: "Exit",
        event: "click",
        func: () => {
            logConsole.alert("Button \"Exit \" clicked.");
            const result = window.confirm("Do you really exit this game?");
            logConsole.event(`Dialog closed and result is \'${result}\'.`);
            if (result) {
                logger.show("Please come back soon.", "See you again! ");
                logConsole.event("This game \'Smill All\' is closing.")
                document.location.href = "../index.html";
            }
        }
    }
}
