import { FETCH_PRODUCTS, ADD_PRODUCT, ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART, CLEAR_CART } from './Types';
//import Products from '../assets/products'


export const fetchProducts = dispatch => {
    //console.log('go fetch products')
    fetch('http://127.0.0.1:5000/getproducts', { method: 'GET'})
    .then((response) => response.json())
    .then((data) => dispatch(
        {
            type: FETCH_PRODUCTS,
            payload: data
        })
    );
};

export const fetchCart = dispatch => {
    //console.log('go fetch cart')
    fetch('http://127.0.0.1:5000/getcart', { method: 'GET'})
    .then((response) => response.json())
    .then((data) => dispatch(
        {
            type: FETCH_CART,
            payload: data
        })
    );
};

export const addProduct = product => dispatch => {
    return dispatch(
        {
            type: ADD_PRODUCT,
            payload: product
        }
    );
}

export const addProductToCart = (product) => dispatch => {
    fetch('http://127.0.0.1:5000/addtocart', { 
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then((response) => response.json())
    .then((data) => dispatch(
        {
            type: ADD_TO_CART,
            payload: product
        })
    );
};

export const removeFromCart = (productID) => dispatch => {
    let productToRemove = {"_id": productID};
    //console.log("go remove the item")
    fetch('http://127.0.0.1:5000/removefromcart', { 
        method: 'DELETE',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(productToRemove)
    })
    .then((response) => response.json())
    .then((data) => dispatch(
        {
            type: REMOVE_FROM_CART,
            payload: data
        })
    );
}

export const clearCart = dispatch => {
    //console.log("removing item from cart")
    fetch('http://127.0.0.1:5000/clearcart', { 
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then( (product) => dispatch(
        {
            type: CLEAR_CART,
            payload: product
        })
    );
}