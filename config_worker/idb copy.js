

let indexDB;

let connect = self.indexedDB.open("MenuMaker", SwConf.APP_VERSION);

// connect.
connect.onsuccess = (ev) => {
    console.log("OK");
    indexDB = connect.result;
    console.log(indexDB.objectStoreNames, typeof indexDB.objectStoreNames, indexDB.Category);
    initHandler(indexDB)
    
};

connect.onerror = (ev) => {
    indexDB = connect.result;
};

connect.onupgradeneeded = (ev) => {
    console.log("UP");
    const db = connect.result; 
    db.createObjectStore("Menu", { keyPath: "mid", autoIncrement: true });          // 전체메뉴
    db.createObjectStore("Category", { keyPath: "cid", autoIncrement: true });      // 카테고리
    db.createObjectStore("Product", { keyPath: "pid", autoIncrement: true });       // 상품
    db.createObjectStore("OptionGroup", { keyPath: "ogid", autoIncrement: true });  // 옵션그룹
    db.createObjectStore("OptionItem", { keyPath: "otid", autoIncrement: true });   // 옵션아이템
};

/**
 * 
 * @param {IDBDatabase} indexDB 
 */
function initHandler( indexDB ){
    
    for( let tableName of indexDB.objectStoreNames){
        indexDB.table[tableName];
    };
    

};