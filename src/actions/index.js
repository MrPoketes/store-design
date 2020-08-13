const axios = require('axios');

const url = process.env.REACT_APP_URL || "http://localhost:8081";
console.log(process.env.URL);

// Product actions

export const fetchProducts = () => (dispatch) => {
    fetch(`${url}/api/products/`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_ALL_PRODUCTS",
                payload: data,
            }));
};
export const fetchNewProducts = () => (dispatch) => {
    fetch(`${url}/api/products/getNew/true`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_NEW_PRODUCTS",
                payload: data,
            }))
}
export const fetchCategories = (gender) => (dispatch) => {
    fetch(`${url}/api/products/categories/${gender}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_CATEGORIES",
                payload: data,
            }))
}
export const fetchByGender = (gender) => (dispatch) => {
    fetch(`${url}/api/products/get/${gender}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "FETCH_PRODUCTS_BY_GENDER",
                payload: data
            }))
}
export const fetchProductById = (id) => (dispatch) => {
    fetch(`${url}/api/products/${id}`)
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
        url: `${url}/auth/login`,
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
        url: `${url}/auth/register`,
        data: {
            username: registerUsername,
            password: registerPassword,
        }
    })
        .then(data =>
            dispatch({
                type: "REGISTER_USER",
                payload: data
            }))
}

// Basket

export const getBasket = (username) => (dispatch) => {
    fetch(`${url}/basket/getbasket/${username}`)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "GET_BASKET",
                payload: data
            }))
}
export const addToBasket = (username, itemId, quantity, price, name) => (dispatch) => {
    axios({
        method: "POST",
        withCredentials: true,
        url: `${url}/basket/`,
        data: {
            username: username,
            itemId: itemId,
            quantity: quantity,
            price: price,
            name: name
        }
    })
        .then(data =>
            dispatch({
                type: "ADD_TO_BASKET",
                payload: data
            }))
}
export const removeEverything = (username) => (dispatch) => {
    axios({
        method: "DELETE",
        withCredentials: true,
        url: `${url}/basket/`,
        data: {
            username: username
        }
    })
        .then(data =>
            dispatch({
                type: "REMOVE_ALL_BASKET",
                payload: data
            }))
}
export const removeOne = (username, itemId) => (dispatch) => {
    axios({
        method: "DELETE",
        withCredentials: true,
        url: `${url}/basket/deleteOne`,
        data: {
            username: username,
            itemId: itemId
        }
    })
        .then(data =>
            dispatch({
                type: "REMOVE_ONE",
                payload: data
            }))
}
export const updateBasket = (username, itemId, quantity) => (dispatch) => {
    axios({
        method: "POST",
        withCredentials: true,
        url: `${url}/basket/updateBasket`,
        data: {
            username: username,
            itemId: itemId,
            quantity: quantity
        }
    })
        .then(data =>
            dispatch({
                type: "UPDATE_BASKET",
                payload: data
            }))
}
// For unmounting 
export const unmountProductById = () => (dispatch) => {
    dispatch({
        type: "UNMOUNT_PRODUCT_BY_ID"
    })
}
export const unmountRemoveEverything = () => (dispatch) => {
    dispatch({
        type: "UNMOUNT_REMOVE_EVERYTHING"
    })
}
export const unmountBasket = () => (dispatch) => {
    dispatch({
        type: "UNMOUNT_BASKET"
    })
}

export const unmountUser = () => (dispatch) => {
    dispatch({
        type: "UNMOUNT_USER"
    })
}