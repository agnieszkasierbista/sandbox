import { reducerA, rootReducer } from "./reducers";
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { LoadingStarsState } from "./App.types";
import { rootEpic } from "./epics";

export const preloadedState = {
    reducerA: { values: [], isFetching: false, isLoading: false },
    reducerB: { isModalVisible: false }
};

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    //    @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true
});

epicMiddleware.run(rootEpic);

export default store