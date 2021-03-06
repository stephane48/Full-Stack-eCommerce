import * as acitonTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: acitonTypes.GET_PRODUCT_REQUEST});

        const { data } = await axios.get("/api/products");

        dispatch({
            type: acitonTypes.GET_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: acitonTypes.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: acitonTypes.GET_PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: acitonTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: acitonTypes.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: acitonTypes.GET_PRODUCT_DETAILS_RESET
    });
};