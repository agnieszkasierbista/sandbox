import { ModalState, LoadingStarsState, State, Background } from "./App.types";
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

export const initialStateReducerB = { isModalVisible: false, color: [], background: [], creator: [] };

export const reducerB: Reducer = (state = initialStateReducerB, action: any) => {

    const payload = action.payload;
    const backgroundOptions = payload?.filter((item: string[]) => item[0] === "modalBackground") || []
    const colorOption = payload?.filter((item: string[]) => item[0] === "modalColor") || []
    const creatorOption = payload?.filter((item: string[]) => item[0] === "modalCreator").flatMap((x: any) => x) || []
    const xButtonOption = payload?.filter((item: string[]) => item[0] === "actionForX").flatMap((x: any) => x) || []
    const cancelButtonOption = payload?.filter((item: string[]) => item[0] === "actionForCancel").flatMap((x: any) => x) || []
    const confirmButtonOption = payload?.filter((item: string[]) => item[0] === "actionForConfirm").flatMap((x: any) => x) || []

    

    switch (action.type) {
        case "MODAL_TOGGLE":
            return {
                ...state,
                isModalVisible: state.creator.length ? !state.isModalVisible : state.isModalVisible
            }

        case "UPDATE_WIZARD_VALUES":
            return {
                ...state,
                background: backgroundOptions,
                color: backgroundOptions.map((option: string[]) => option[1]).includes("colored") ? colorOption.flatMap((x: any) => x) : [],
                creator: creatorOption,
                xButton: xButtonOption,
                cancelButton: cancelButtonOption,
                confirmButton: confirmButtonOption
            }

        default:
            return state
    }

};

export const initialStateReducerC = { isLoading: false };

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
