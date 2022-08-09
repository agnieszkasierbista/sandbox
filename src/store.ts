import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { State } from "./App.types";
import { rootEpic } from "./epics";

const preloadedState = { values: [], isFetching: false, isLoading: false };

const reducer: Reducer = (state: State = { values: [], isFetching: false, isLoading: false }, action) => {
    switch (action.type) {
        case "ABC":
            return {
                ...state,
                isFetching: true
            }

        case "XYZ":
            return {
                ...state,
                values: ["aaa", "aaab", "aaabbb", "bbbccc",
                    "bbbddd", "cccddd", "ccctttt", "bbb", "bbbbeee"],
                isFetching: false
            }

            case "TOGGGLE":
            return {
                ...state,
                isLoading: !state.isLoading
            }

        default:
            return state
    }

};

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true
});

epicMiddleware.run(rootEpic);

export default store