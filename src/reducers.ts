import { ModalState, LoadingStarsState, State } from "./App.types";
import { combineReducers } from "redux";
import { Reducer } from "redux";

export const initialStateReducerA = {
    values: [], isFetching: false
};

export const reducerA: Reducer = (state = initialStateReducerA, action: any) => {
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

       
        default:
            return state
    }

};

export const initialStateReducerB = { isModalVisible: false };

export const reducerB: Reducer = (state = initialStateReducerB, action: any) => {
    switch (action.type) {
        case "MODAL_TOGGLE":
            return {
                ...state,
                isModalVisible: !state.isModalVisible
            }

        default:
            return state
    }

};

export const initialStateReducerC = {isLoading: false};

export const reducerC: Reducer = (state = initialStateReducerC, action: any) => {

    console.log("state.isLoading", state.isLoading)
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                isLoading: !state.isLoading
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({ reducerA: reducerA, reducerB: reducerB, reducerC: reducerC });

export default rootReducer;
