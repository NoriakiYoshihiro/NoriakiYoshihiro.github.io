'use strict'

class TableCreator {
    #parent;
    #table;
    #tbody;
    #tr = [];
    #td = [];

    get parent() { return this.#parent; }
    get table() { return this.#table; }
    get tbody() { return this.#tbody; }
    get tr() { return this.#tr; }
    get td() { return this.#td; }

    createTable(parentId, vsize, hsize) {// giveClassNameFunc, giveIdFunc) {
        this.#parent = document.getElementById(parentId);

        this.#table = document.createElement("table");
        this.#table.id = "fieldTable";
        this.#table.border=1;
        this.#tbody = document.createElement("tbody");

        this.#tr = [];
        this.#td = [];
        this.#td = createBoxArray(vsize, hsize);
        for (let v = 0; v < vsize; v++) {
            this.#tr[v] = document.createElement("tr");
            for (let h = 0; h < hsize; h++) {
                this.#td[v][h] = document.createElement("td");
                this.#td[v][h].className = this.configOfTable.className(v, h);
                this.#td[v][h].id = this.configOfTable.id(v, h);//`cell${c}`;
                this.#td[v][h].addEventListener("click", this.configOfTable.clickEvent(v, h), false);
                this.#tr[v].appendChild(this.#td[v][h]);
            }
            this.#tbody.appendChild(this.#tr[v]);
        }

        this.#table.appendChild(this.#tbody);
        this.#parent.appendChild(this.#table);
    }
}