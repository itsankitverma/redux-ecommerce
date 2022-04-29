const { combineReducers } = require("redux");
const { addToCartReducer } = require("./addToCartReducer");

export const rootReducer = combineReducers({ addToCartReducer })