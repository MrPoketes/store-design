const initialState= {
    productData:null,
    newProducts:null
};

const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case "FETCH_ALL_PRODUCTS":
            return{
                ...state,
                productData:action.payload
            }
        case "FETCH_NEW_PRODUCTS":
            return{
                ...state,
                newProducts:action.payload
            }
        default:
            return state
    };
};

export default productsReducer;