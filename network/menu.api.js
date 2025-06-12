

async function getMenuList(params) {

    const url = 'https://dev.nextpay.co.kr/menu/v1/getShopMenuSet?frId=10107';

    let result;
    let apiResult;
    try {
        apiResult = await fetch(url,{ 
                method : "GET",
                headers : {  "Content-Type": "application/json", }
        });
        
        if ( !apiResult.ok ) return result = { error : { status : apiResult.status, request : apiResult, message : "request failed" } };
    } catch (error) {
        return result = { error : {message : "request failed" } };
    };
    
    return result = await apiResult.json();
};