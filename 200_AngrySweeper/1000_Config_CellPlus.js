'use strict'
// ================================================================================
//    ! IMPORTANT ! 
//  Configuration for each of games
//  The configuration which is set here is used in this game control. 
// ================================================================================


// These are global variables of constant value..
const vSize = 12;
const hSize = 16;

const vInfoSize = 5;
const hInfoSize = 2;

const cSize = vSize * hSize;
//const direct = { upper: -hSize, left: -1, self: 0, right: 1, lower: hSize };
const direct = { UpL: -hSize - 1, upper: -hSize, UpR: -hSize + 1, Left: -1, self: 0, right: +1, LoL: +hSize - 1, Lower: +hSize, LoR: +hSize + 1 };


// ＜重要＞class Cell extends CellXxxx のCellXxxxに相当する部分を書き直すこと
// CellXxxxのsuper classに本来自己完結しているので本来中身は空。
// ここではデバッグなどのために追加するフィールド、プロパティ、メソッドがあればここに記述する
// 併せてCellxxxxの名前をCellに変更することでインスタンス生成を同じコードで実現する
class Cell extends CellAngrySweeper {
    // 必要ならここにコードを書く

}
