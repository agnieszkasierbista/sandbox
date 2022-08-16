import { ModalState, LoadingStarsState, State } from "./App.types";
import { combineReducers } from "redux";
import { Reducer } from "redux";


export const reducerA: Reducer = (state: State = {
    reducerA: { values: [], isFetching: false, isLoading: false },
    reducerB: { isModalVisible: false }
}, action: any) => {
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

        case "TOGGLE":
            return {

                ...state,
                isLoading: !state.reducerA?.isLoading
            }



        default:
            return state
    }

};

export const reducerB: Reducer = (state: State = {
    reducerB: { isModalVisible: false },
    reducerA: { values: [], isFetching: false, isLoading: false }
}, action: any) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return {
                ...state,
                isModalVisible: !state.reducerB.isModalVisible


            }

        default:
            return state
    }

};

export const rootReducer= combineReducers({ reducerA: reducerA, reducerB: reducerB });
