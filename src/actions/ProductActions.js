import { FETCH_PRODUCTS, ADD_PRODUCT, ADD_TO_CART, FETCH_CART } from './Types';
//import Products from '../assets/products'


export const fetchProducts = dispatch => {
    console.log('go fetch products')
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
    console.log('go fetch cart')
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
    // return dispatch(
    //     {
    //         type: ADD_TO_CART,
    //         payload: product
    //     }
    // );
}