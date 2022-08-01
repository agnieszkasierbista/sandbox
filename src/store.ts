import {configureStore, Reducer} from "@reduxjs/toolkit";
import {createEpicMiddleware} from "redux-observable";

const preloadedState = {};

const reducer: Reducer = (state = {}, action) => {
    return state
};

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true
});

export default store