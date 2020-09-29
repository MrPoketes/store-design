const initialState = {
    userLogin: null,
    userRegister: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                userLogin: action.payload,
            };
        case "REGISTER_USER":
            return {
                ...state,
                userRegister: action.payload
            };
        case "UNMOUNT_USER":
            return {
                ...state,
                userLogin: null,
                userRegister: null,
            }
        case "UNMOUNT_LOGIN":
            return {
                ...state,
                userLogin: "Loged out"
            }
        default:
            return state
    }
}
export default usersReducer;