'use strict'
// ================================================================================
//    ! IMPORTANT ! 
//  Configuration for each of games
//  The configuration which is set here is used in this game control. 
// ================================================================================


// FieldBaseに個別追加する必要があるフィールド、プロパティ、メソッドがあればここに記述する
class Field extends FieldBase {
    // 必要ならここにコードを書く

}

// FieldのセルがpushされたときのeventListerが処理する内容を記述
function pushCellAndShow(c) {
    // 必要ならここにコードを書く
    cell.pushCell(c);
    field.show(cell.statusForShow);
    info.show(cell);
    cell.isClearedAndDoEvent();
    switchTextOfBtnRetry(cell.isCleared());
}
