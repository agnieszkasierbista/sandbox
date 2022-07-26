import rootReducer from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {createEpicMiddleware} from "redux-observable";
import {State} from "./components/App/App.types";
import {rootEpic} from "./epics";

export const preloadedState: State = {
    reducerA: {values: [], isFetching: false},
    reducerB: {
        isModalVisible: false,
        color: ["modalColor", ""],
        blur: ["modalBlur", "", "modalBlur", ""],
        background: [["modalBackground", ""]],
        creator: ["modalCreator", ""],
        xButton: ["actionForX", ""],
        cancelButton: ["actionForCancel", ""],
        confirmButton: ["actionForConfirm", ""]
    },
    reducerC: {isLoading: false},
    reducerD: {isUploading: false, shouldShowImg: false}
};

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true,
    preloadedState,
});

epicMiddleware.run(rootEpic);

export default store