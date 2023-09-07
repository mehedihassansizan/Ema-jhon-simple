import { getShoppingCart } from "./fakedb"

const oderReviewData = async() =>{
    const response = await fetch('products.json')
    const products = await response.json()
    
    const getSavedCart = getShoppingCart();
    // console.log(savedCart);

    const savedCart = [];
    for(const id in getSavedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = getSavedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart;

}
export {oderReviewData}