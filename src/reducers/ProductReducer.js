import { FETCH_PRODUCTS, ADD_PRODUCT, ADD_TO_CART, FETCH_CART, CLEAR_CART, REMOVE_FROM_CART } from '../actions/Types'

const initialState = {
    itemsCountInCart: 0,
    products: [],
    product: {},
    cart:[]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log(action.payload)
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case ADD_TO_CART:
            //console.log('adding to cart');
            //let productToAdd = action.payload;
            //let existingCart = state.cart;
            //existingCart.append();
            return {
                ...state,
                cart: state.cart.concat(action.payload),
                itemsCountInCart: state.itemsCountInCart + 1
            }
            //[...state.cart, action.payload];
                //productToAdd
        case FETCH_CART:
            //console.log('fetching cart')
            return {
                ...state,
                cart: action.payload
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                itemsCountInCart: 0
            }
        case REMOVE_FROM_CART:
            console.log(action.payload)
            return {
                ...state,
                cart: action.payload
            }    
        default:
            return state;
    }
}