import * as types from "./types";

export const addItem = (newItem) => ({
type: types.ADD_ITEM,
payload: newItem,

});

export const deleteItem = (productId) => ({
    type: types.DELETE_ITEM,
    payload: productId,

});

export const checkout = () => ({
    type: types.CHECKOUT,

});