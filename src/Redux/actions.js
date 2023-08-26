import * as types from "./actionTypes";

export const loadProductsStart = () => ({
  type: types.LOAD_PRODCUTS_START,
});

export const loadProductsSuccess = (users) => ({
  type: types.LOAD_PRODCUTS_SUCCESS,
  payload: users,
});

export const loadProductsError = (error) => ({
  type: types.LOAD_PRODCUTS_ERROR,
  payload: error,
});

//  COLOR

export const loadColorsStart = () => ({
  type: types.LOAD_PRODCUTS_COLOR_START,
});

export const loadColorsSuccess = (colors) => ({
  type: types.LOAD_PRODCUTS_COLOR_SUCCESS,
  payload: colors,
});

export const loadColorsError = (error) => ({
  type: types.LOAD_PRODCUTS_COLOR_ERROR,
  payload: error,
});

// MATERIAL

export const loadMaterialsStart = () => ({
  type: types.LOAD_PRODCUTS_MATERIALS_START,
});

export const loadMaterialsSuccess = (materials) => ({
  type: types.LOAD_PRODCUTS_MATERIALS_SUCCESS,
  payload: materials,
});

export const loadMaterialsError = (error) => ({
  type: types.LOAD_PRODCUTS_MATERIALS_ERROR,
  payload: error,
});

// FEATURED PRODUCT


export const loadFeaturedProductStart = () => ({
  type: types.LOAD_FEATURED_PRODCUTS_START,
});

export const loadFeaturedProductSuccess = (featuredProducts) => ({
  type: types.LOAD_FEATURED_PRODCUTS_SUCCESS,
  payload: featuredProducts,
});

export const loadFeaturedProductError = (error) => ({
  type: types.LOAD_FEATURED_PRODCUTS_ERROR,
  payload: error,
});


// ADD TO CART


export const addToCartStart = (itemProduct) => ({
  type: types.ADD_TO_CART_START,
  payload: itemProduct,
});


export const addToCartSuccess = (iteamProduct) => ({
  type: types.ADD_TO_CART_SUCCESS,
  payload: iteamProduct,
});

export const addToCartError = (error) => ({
  type: types.ADD_TO_CART_ERROR,
  payload: error,
});



// REMOVE CART
export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART_START,
  payload: productId,
});

 export const removeFromCartSuccess = (productId) => ({
  type: types.REMOVE_FROM_CART_SUCCESS,
  payload: productId,
});

export const removeFromCartError = (error) => ({
  type: types.REMOVE_FROM_CART_ERROR,
  payload: error,
});


