

class ProductViewModel extends HTMLElement{
// class CategoryViewModel {
    
    #productData = {};

    constructor(product){
        super();
        this.setProductData = product;
        this.init();
    };
    
    get getProductData (){
        return this.#productData;
    };
    set setProductData (newProduct) {
        this.#productData = newProduct;
    }

    connectedcallback(){
        this.init();
    };


    init(){
        
        const btn = document.createElement('button');
        btn.innerText = this.getProductData['productName'] ?? "product";
        
        const img = document.createElement("img");
        let imgUrl = this.getProductData['imageUrl'] ?? "./static/img/testfa.icon.png";
        if( this.getProductData[['imageUrl']].length == 0 ){
            imgUrl = "./static/img/testfa.icon.png";
        };

        img.setAttribute('src', imgUrl);
        btn.append(img);

        
        this.classList = "product item";
        this.append(btn);
    };
};

customElements.define('product-view-model', ProductViewModel);