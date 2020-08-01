const initialState = {
    basket: null,
    added: null,
};

const basketReducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_BASKET":
            return{
                ...state,
                basket:action.payload
            }
        case "ADD_TO_BASKET":
            return{
                ...state,
                added:action.payload
            }
        default:
            return state;
    }
}
export default basketReducer;