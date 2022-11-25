import { ADD_SHOP, REMOVE_SHOP } from "../action/action-types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOP:
            return [...state, action.payload];

        case REMOVE_SHOP:
            return state.filter(shop => shop.id !== action.payload);

        default:
            return state;
    }
}
