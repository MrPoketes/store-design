const axios = require('axios');

export const fetchProducts = () => (dispatch) => {
    fetch('http://localhost:8081/api/products/')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_ALL_PRODUCTS",
                payload: data,
            }));
};
export const fetchNewProducts = () => (dispatch) => {
    fetch('http://localhost:8081/api/products/getNew/true')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_NEW_PRODUCTS",
                payload: data,
            }))
}
export const fetchCategories = (gender) => (dispatch) => {
    fetch(`http://localhost:8081/api/products/categories/${gender}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_CATEGORIES",
                payload: data,
            }))
}
export const fetchByGender = (gender) => (dispatch) => {
    fetch(`http://localhost:8081/api/products/get/${gender}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_PRODUCTS_BY_GENDER",
                payload: data
            }))
}
export const fetchProductById = (id) => (dispatch) => {
    fetch(`http://localhost:8081/api/products/${id}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_PRODUCT_BY_ID",
                payload: data
            }))
}
// Authentication

export const loginUser = (logInUsername, logInPassword) => (dispatch) => {
    axios({
        method: "POST",
        withCredentials: true,
        url: "http://localhost:8081/auth/login",
        data: {
            username: logInUsername,
            password: logInPassword,
        }
    })
        .then(data =>
            dispatch({
                type: "LOGIN_USER",
                payload: data
            }))
}
export const registerUser = (registerUsername, registerPassword) => (dispatch) => {
    axios({
        method: "POST",
        withCredentials: true,
        url: "http://localhost:8081/auth/register",
        data: {
            username: registerUsername,
            password: registerPassword,
        }
    })
        .then(data=>
            dispatch({
                type:"REGISTER_USER",
                payload:data
            }))
}
// For unmounting 
export const unmountProductById = () => (dispatch) => {
    dispatch({
        type: "UNMOUNT_PRODUCT_BY_ID",
    })
}