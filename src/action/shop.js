import { ADD_SHOP, REMOVE_SHOP } from "./action-types";

export const addShop = shop => ({
    type: ADD_SHOP,
    payload: shop
});

export const removeShop = id => ({
    type: REMOVE_SHOP,
    payload: id
});