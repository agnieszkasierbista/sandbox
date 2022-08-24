import { Action, AnyAction, combineReducers, Reducer } from "redux";

export const initialStateReducerA = {
    values: [], isFetching: false
};

export const reducerA: Reducer = (state = initialStateReducerA, action: Action) => {
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

export const initialStateReducerB = { isModalVisible: false, color: [], background: [], creator: [], blur: [] };

export const reducerB: Reducer = (state = initialStateReducerB, action: AnyAction) => {

    const payload = action.payload;
    // console.log("ACTIOP PAYL", payload)
    const backgroundOptions = payload?.filter((item: string[]) => item[0] === "modalBackground") || []
    const colorOption = payload?.filter((item: string[]) => item[0] === "modalColor") || []
    const blurOption = payload?.filter((item: string[]) => item[0] === "modalBlur") || []
    const creatorOption = payload?.filter((item: string[]) => item[0] === "modalCreator").flatMap((x: string) => x) || []
    const xButtonOption = payload?.filter((item: string[]) => item[0] === "actionForX").flatMap((x: string) => x) || []
    const cancelButtonOption = payload?.filter((item: string[]) => item[0] === "actionForCancel").flatMap((x: string) => x) || []
    const confirmButtonOption = payload?.filter((item: string[]) => item[0] === "actionForConfirm").flatMap((x: string) => x) || []



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
                color: backgroundOptions.map((option: string[]) => option[1]).includes("colored") ? colorOption.flatMap((x: string) => x) : [],
                blur: backgroundOptions.map((option: string[]) => option[1]).includes("blured") ? blurOption.flatMap((x: string) => x) : [],
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

export const reducerC: Reducer = (state = initialStateReducerC, action: Action) => {

    // console.log("state.isLoading", state.isLoading)
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

export const initialStateReducerD = { isUploading: false, shouldShowImg: false }

export const reducerD: Reducer = (state = initialStateReducerD, action: Action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                isUploading: true,
                shouldShowImg: false
            }

        case "UPLOADED":
            return {
                ...state,
                isUploading: false,
                shouldShowImg: true
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({ reducerA: reducerA, reducerB: reducerB, reducerC: reducerC, reducerD: reducerD });

export default rootReducer;
