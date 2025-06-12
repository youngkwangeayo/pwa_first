
//     <script src="./app.js" defer></script>


const SwConf = new class {

    #CACHE_NAME = "menumaker-v1";
    #CACHE_FILLE = [
        "/static/img/testfa.icon.png",
        "/static/css/main.css",
        "/network/menu.api.js",
        "/model/category.view.model.js",
        "/model/product.view.model.js",
        "/controller/menu.controller.js"
    ]

    constructor() { };

    get CACHE_NAME() { return this.#CACHE_NAME };
    get CACHE_FILLE() { return this.#CACHE_FILLE };



    getCACHE_NAME = () => { return this.#CACHE_NAME };
    getCACHE_FILLE = () => { return this.#CACHE_FILLE };


};
// class SwConf {

// };