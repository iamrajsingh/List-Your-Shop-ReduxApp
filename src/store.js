import {legacy_createStore, combineReducers} from 'redux'

import shops from "./reducer/shop"

const rootReducer = combineReducers({
    shops
})

const store = legacy_createStore(rootReducer);

export default store;