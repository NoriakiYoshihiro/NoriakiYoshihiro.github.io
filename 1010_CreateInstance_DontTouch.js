'use strict'
// ================================================================================
//    ! IMPORTANT ! 
//  Common instance creation
//  Don't touch this page. 
// ================================================================================

const logger = new Logger();

const cell = new Cell();

const field = new Field();
field.createTable("areaField", vSize, hSize);

const info = new Info();
info.createTable("areaInfo", vInfoSize, hInfoSize);