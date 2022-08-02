import { configureStore, Reducer } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { State } from "./App.types";
import { rootEpic } from "./epics";

const preloadedState = {values: []};

const reducer: Reducer = (state: State = {values: []}, action) => {
    switch (action.type) {
        case "XYZ":
            return {
                ...state,
                values: ["aaa", "aaab", "aaabbb", "bbbccc", "bbbddd", "cccddd", "ccctttt", "bbb", "bbbbeee"]
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