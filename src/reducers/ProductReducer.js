import { FETCH_PRODUCTS, ADD_PRODUCT } from '../actions/Types'

const initialState = {
    products: [],
    product: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}