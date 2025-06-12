



async function renderMenus() {
    let categoryArea = document.querySelector('.category-area');
    let productArea = document.querySelector('.product-area');
    
    categoryArea.innerHTML = "";
    productArea.innerHTML = "";
    
    let data = await getMenuList();

    for (let category of data.data.Category) {
        let categoryEle = new CategoryViewModel(category);
        categoryEle.addEventListener("click", onClickCategoryHendler);
        categoryArea.append(categoryEle);
    };

    categoryArea.querySelector('categroy-view-model').click();
};


function onClickCategoryHendler (event){
    for(let c of document.querySelectorAll('categroy-view-model')) c.classList.remove('on');
    
    event.currentTarget.classList.add('on');
    renderProducts(event.currentTarget.getCategoryData.Product);
};

function renderProducts (products) {
    
    let productArea = document.querySelector('.product-area');
    productArea.innerHTML = "";

    for (let product of products) {
        let productEle = new ProductViewModel(product);
        productEle.addEventListener("click", (e)=>{});
        productArea.append(productEle);
    };

};

