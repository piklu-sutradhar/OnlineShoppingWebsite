import { combineReducers } from 'redux';
//import postProductReducer from './PostProductReducer';
//import fetchProductReducer from './FetchProductReducer';
import productReducer from './ProductReducer'

export default combineReducers(
    {
        //addProduct: postProductReducer,
        //fetchProducts: fetchProductReducer,
        productReducer: productReducer
    }
);