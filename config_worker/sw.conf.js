

const SwConf = new class {

    #APP_VERSION = 1;
    

    #CACHE_NAME = "menumaker-v1";
    #CACHE_FILLE = [
        "/source/static/img/testfa.icon.png",
        "/source/static/img/faire.png",
        "/source/static/css/main.css",
        "/source/network/menu.api.js",
        "/source/model/category.view.model.js",
        "/source/model/product.view.model.js",
        "/source/controller/menu.controller.js"
    ];
    


    constructor() { Log.debug("SWCONF RUN") };

    get APP_VERSION () {return this.#APP_VERSION};
    get CACHE_NAME() { return this.#CACHE_NAME };
    get CACHE_FILLE() { return this.#CACHE_FILLE };



    getCACHE_NAME = () => { return this.#CACHE_NAME };
    getCACHE_FILLE = () => { return this.#CACHE_FILLE };


};