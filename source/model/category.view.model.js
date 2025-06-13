

class CategoryViewModel extends HTMLElement{
// class CategoryViewModel {
    
    #categoryData = {};

    constructor(category){
        super();
        this.setCategoryData = category;
        this.init();
    };
    
    get getCategoryData (){
        return this.#categoryData;
    };
    set setCategoryData (newCategory) {
        this.#categoryData = newCategory;
    }

    connectedcallback(){
        this.init();
    };


    init(){
        this.classList = "category item";
        const btn = document.createElement('button');
        btn.innerText = this.getCategoryData['categoryName'] ?? "category";
        this.append(btn);
        // this.innerText = this.getCategoryData['categoryName'] ?? "category";
    };
};

customElements.define('categroy-view-model', CategoryViewModel);
