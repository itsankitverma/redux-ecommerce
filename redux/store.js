const { legacy_createStore } = require("redux");
const { rootReducer } = require("./reducer");


export const store = legacy_createStore(rootReducer)