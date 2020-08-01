import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";
import basketReducer from "./basketReducer";

export default combineReducers({
    products: productsReducer,
    user: usersReducer,
    basket:basketReducer
});