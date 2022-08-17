import rootReducer, { reducerA } from "./reducers";
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { LoadingStarsState, State } from "./App.types";
import { rootEpic } from "./epics";

export const preloadedState: State = {
    reducerA: { values: [], isFetching: false },
    reducerB: {
        isModalVisible: false,
        color: ["modalColor", ""],
        background: [["modalBackground", ""]],
        creator: ["modalCreator", ""]
    },
    reducerC: { isLoading: false }
};

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
    reducer: rootReducer,
    //    @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true,
    preloadedState,
});

epicMiddleware.run(rootEpic);

export default store