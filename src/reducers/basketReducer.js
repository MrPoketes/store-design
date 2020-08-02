const initialState = {
    basket: null,
    added: null,
    removedAll: null,
    removeOne: null,
    updated: null
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BASKET":
            return {
                ...state,
                basket: action.payload
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                added: action.payload
            }
        case "REMOVE_ALL_BASKET":
            return {
                ...state,
                removedAll: action.payload
            }
        case "UNMOUNT_REMOVE_EVERYTHING":
            return {
                ...state,
                removedAll: null
            }
        case "REMOVE_ONE":
            return {
                ...state,
                removeOne: action.payload
            }
        case "UPDATE_BASKET":
            return {
                ...state,
                updated: action.payload
            }
        case "UNMOUNT_BASKET":
            return {
                ...state,
                basket: null
            }
        default:
            return state;
    }
}
export default basketReducer;