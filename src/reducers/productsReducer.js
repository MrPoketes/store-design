const initialState = {
    productData: null,
    newProducts: null,
    categories: null,
    genderProducts: null,
    product: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_PRODUCTS":
            return {
                ...state,
                productData: action.payload
            }
        case "FETCH_NEW_PRODUCTS":
            return {
                ...state,
                newProducts: action.payload
            }
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "FETCH_PRODUCTS_BY_GENDER":
            return {
                ...state,
                genderProducts: action.payload
            }
        case "FETCH_PRODUCT_BY_ID":
            return {
                ...state,
                product: action.payload
            }
        case "UNMOUNT_PRODUCT_BY_ID":
            return {
                ...state,
                product: null
            }
        default:
            return state
    };
};

export default productsReducer;