import * as types from "./actionTypes";

const initialState = {
    products: [],
    colors: [],
    materials: [],
    featuredProduct: [],
    cartItems: [],
    loading: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PRODCUTS_START:
        case types.LOAD_PRODCUTS_COLOR_START:
        case types.LOAD_PRODCUTS_MATERIALS_START:
        case types.LOAD_FEATURED_PRODCUTS_START:
        case types.ADD_TO_CART_START:
        case types.REMOVE_FROM_CART_START:

            return {
                ...state,
                loading: true,
            };

        case types.LOAD_PRODCUTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case types.LOAD_PRODCUTS_COLOR_SUCCESS:
            return {
                ...state,
                loading: false,
                colors: action.payload,
            };

        case types.LOAD_PRODCUTS_MATERIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                materials: action.payload,
            };

        case types.LOAD_FEATURED_PRODCUTS_SUCCESS:
            return {
                ...state,
                loading: false,
                featuredProduct: action.payload,
            };
        case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...state.cartItems, action.payload],
            };

        case types.REMOVE_FROM_CART_SUCCESS:
            // console.log(state.cartItems)
            // console.log(action.payload)
            console.log(state.cartItems.filter(item => item.id !== action.payload.id))
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        case types.LOAD_PRODCUTS_ERROR:
        case types.LOAD_PRODCUTS_COLOR_ERROR:
        case types.LOAD_PRODCUTS_MATERIALS_ERROR:
        case types.LOAD_FEATURED_PRODCUTS_ERROR:
        case types.ADD_TO_CART_ERROR:
        case types.REMOVE_FROM_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default usersReducer;