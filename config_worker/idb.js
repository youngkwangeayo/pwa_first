

const IndexDB = new class {

    /** @type {IDBDatabase} */
    #indexDB;
    /** @type {IDBOpenDBRequest} */
    #connect;


    constructor() {
        Log.debug("IDB regist");
        this.#connect = self.indexedDB.open("MenuMaker", SwConf.APP_VERSION);
        this.#connect.onupgradeneeded = this.#onupgradeneeded.bind(this);
        this.#connect.onsuccess = this.#onsuccess.bind(this);
        this.#connect.onerror = this.#onerror.bind(this);

        
    };

    #onsuccess(ev) {
        Log.debug("IDB run");
        this.#indexDB = this.#connect.result;
        console.log(this.#indexDB.objectStoreNames, typeof this.#indexDB.objectStoreNames, this.#indexDB.Category);
    };

    #onupgradeneeded(ev) {
        Log.debug("IDB preparing");
        const db = this.#connect.result;
        db.createObjectStore("Menu", { keyPath: "mid", autoIncrement: true });          // 전체메뉴
        db.createObjectStore("Category", { keyPath: "cid", autoIncrement: true });      // 카테고리 고민중.(어떻게쓸지 안쓸수도)
        db.createObjectStore("Product", { keyPath: "pid", autoIncrement: true });       // 상품 고민중.(어떻게쓸지 안쓸수도)
        db.createObjectStore("OptionGroup", { keyPath: "ogid", autoIncrement: true });  // 옵션그룹 고민중.(어떻게쓸지 안쓸수도)
        db.createObjectStore("OptionItem", { keyPath: "otid", autoIncrement: true });   // 옵션아이템   고민중.(어떻게쓸지 안쓸수도)

        db.createObjectStore("MenuProcessStatus", { keyPath: "mpsid", autoIncrement: true });   // 데이터 상태 strick, sync, inmemory
    };

    #onerror(ev) {
        this.#indexDB = this.#connect.result;
    };


    /**
     * @param {string} table 
     * @param {string} key 
     * @returns {Promise<any>}
     */
    async get(table, key) {
        const transaction = this.#indexDB.transaction(table, 'readonly');
        const storeSameTable = transaction.objectStore(table);
        return storeSameTable.get(key);
    };

    /**
     * @param {string} table 
     * @param {object} value 
     * @returns {Promise<number>} 성공시 키반환, 실패시  음수 반환
     */
    async add(table, value) {
        const transaction = this.#indexDB.transaction(table, 'readwrite');
        const storeSameTable = transaction.objectStore(table);

        let result = storeSameTable.add(value);
        result.onsuccess = (ev)=>{
            return result.result
        };
        result.onerror = (ev)=>{
            return -1;
        };
    };

};


