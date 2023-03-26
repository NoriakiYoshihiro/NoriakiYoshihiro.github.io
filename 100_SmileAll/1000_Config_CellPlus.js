'use strict'
// ================================================================================
//    ! IMPORTANT ! 
//  Configuration for each of games
//  The configuration which is set here is used in this game control. 
// ================================================================================


// These are global variables of constant value..
const vSize=5;
const hSize=5;

const vInfoSize=6;
const hInfoSize=2;

const cSize = vSize * hSize;
const direct = { upper: -hSize, left: -1, self: 0, right: 1, lower: hSize };


// ＜重要＞class Cell extends CellXxxx のCellXxxxに相当する部分を書き直すこと
// CellXxxxのsuper classに本来自己完結しているので本来中身は空。
// ここではデバッグなどのために追加するフィールド、プロパティ、メソッドがあればここに記述する
// 併せてCellxxxxの名前をCellに変更することでインスタンス生成を同じコードで実現する
class Cell extends CellSmileAll {
    // 必要ならここにコードを書く

}
