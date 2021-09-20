import { ActionType } from "../actionType";
import { BASE_URL,DASHBOARD } from "../../utils/constants";
import axios from "axios"; 
import { history } from "../../utils/helpers/history";

export const setCartData = (product) => {
    console.log(product, "product received in setCartData=====");
    return {
        type: ActionType.CART_LIST,
        payload: product
    }
}

export const cartAction = (productId, qty) => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.post(`${BASE_URL}/cart`,{
                product: { id: productId, quantity: qty }
            }, { headers: { authorization: `bearer ${token}` } });

            dispatch(setCartData(response.data?.products));
            dispatch(getCartAction);
            // console.log(response.data,"----- details");
        }catch(error){
            console.log(error,"Product Details view error");
        } 
    } 
}

export const getCartAction = () => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.get(`${BASE_URL}/cart`, { headers: { authorization: `bearer ${token}` } });
             
            dispatch(setCartData(response.data?.products));
            console.log(response.data,"====get all cart from database===");
        }catch(error){
            console.log(error,"Cart Product load from getCartAction error");
        } 
    } 
}

export const CheckOutAction = () => {
    return async (dispatch, getState) => { 
        const {authStore} = getState();
        const token = authStore.token; 
        try {
            const response = await axios.get(`${BASE_URL}/order/checkout`, { headers: { authorization: `bearer ${token}` } });
             
            // dispatch(setCartData(response.data));
            console.log(response.data,"====response from checkoutAction===");
        }catch(error){
            console.log(error,"response from checkoutAction error");
        } 
    } 
}