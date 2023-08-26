import * as types from "./actionTypes";

import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call,
    select,
} from "redux-saga/effects";

import { loadFeaturedProductsApi, loadProdcutsApi, loadProductsColorsApi, loadProductsMaterialsApi } from "./api";
import { addToCartError, addToCartSuccess, loadColorsError, loadColorsSuccess, loadFeaturedProductError, loadFeaturedProductSuccess, loadMaterialsError, loadMaterialsSuccess, loadProductsError, loadProductsSuccess, removeFromCartError, removeFromCartSuccess } from "./actions";

function* onLoadProdcutsStartAsync() {
    try {
        const response = yield call(loadProdcutsApi);
        if (response) {
            yield delay(500);
            yield put(loadProductsSuccess(response.products));
        }
    } catch (error) {
        yield put(loadProductsError(error.response));
    }
}

function* onLoadColorsStartAsync() {
    try {
        const response = yield call(loadProductsColorsApi);
        if (response) {
            yield delay(500);
            yield put(loadColorsSuccess(response.colors));
        }
    } catch (error) {
        yield put(loadColorsError(error.response));
    }
}


function* onLoadMaterialsStartAsync() {
    try {
        const response = yield call(loadProductsMaterialsApi);
        if (response) {
            yield delay(500);
            yield put(loadMaterialsSuccess(response.material));
        }
    } catch (error) {
        yield put(loadMaterialsError(error.response));
    }
}


function* onLoadFeaturedProdcutsStartAsync() {
    try {
        const response = yield call(loadFeaturedProductsApi);
        if (response) {
            yield delay(500);
            yield put(loadFeaturedProductSuccess(response.featured));
        }
    } catch (error) {
        yield put(loadFeaturedProductError(error.response));
    }
}


function updateCartInLocalStorage(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


function* onAddToCart(action) {
    const itemProduct = action.payload;
    try {
        // Retrieve existing cart items from Redux state
        const existingCartItems = yield select((state) => state.data.cartItems);

        // Create a new array with the added item
        const updatedCartItems = [...existingCartItems, itemProduct];

        // Update cart items in local storage
        updateCartInLocalStorage(updatedCartItems);

        // Dispatch success action
        yield put(addToCartSuccess(itemProduct));
    } catch (error) {
        yield put(addToCartError("An error occurred while adding to cart"));
    }
}

function* onAddToCartSaga() {
    yield takeEvery(types.ADD_TO_CART_START, onAddToCart);
}
function* onRemoveFromCart(action) {
    const productId = action.payload;
    try {
        // Your logic to remove the item from the cart, if needed
        // For example, you might want to update an API or local storage here

        // In this example, we'll simulate removing from the cart
        yield delay(500); // Placeholder delay
        yield put(removeFromCartSuccess(productId));
    } catch (error) {
        yield put(removeFromCartError(error.response));
    }
}

// Add the saga watcher function for removing items from the cart
function* onRemoveFromCartSaga() {
    yield takeEvery(types.REMOVE_FROM_CART_START, onRemoveFromCart);
}



function* onLoadProdcuts() {
    yield takeEvery(types.LOAD_PRODCUTS_START, onLoadProdcutsStartAsync);
}

function* onColorsProdcuts() {
    yield takeEvery(types.LOAD_PRODCUTS_COLOR_START, onLoadColorsStartAsync);
}


function* onMaterialsProdcuts() {
    yield takeEvery(types.LOAD_PRODCUTS_MATERIALS_START, onLoadMaterialsStartAsync);
}

function* onFeaturedLoadProdcuts() {
    yield takeEvery(types.LOAD_FEATURED_PRODCUTS_START, onLoadFeaturedProdcutsStartAsync);
}


export function* helloSaga() {
    console.log('Hello Sagas!')
}


const userSagas = [
    fork(onLoadProdcuts),
    fork(onColorsProdcuts),
    fork(onMaterialsProdcuts),
    fork(onFeaturedLoadProdcuts),
    fork(onAddToCartSaga),
    fork(onRemoveFromCartSaga),

];
export default function* rootSaga() {
    yield all([...userSagas]);
}