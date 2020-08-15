import { FETCH_PRODUCTS, ADD_PRODUCT } from './Types';
import Products from '../assets/products'


export const fetchProducts = dispatch => {
    return dispatch(
        {
            type: FETCH_PRODUCTS,
            payload: Products 
        }
    );
}

export const addProduct = product => dispatch => {
    return dispatch(
        {
            type: ADD_PRODUCT,
            payload: product
        }
    );
}