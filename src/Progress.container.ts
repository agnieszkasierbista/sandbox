import {connect} from "react-redux"
import {Dispatch} from "redux";
import { State } from "./App.types";
import { Progress } from "./Progress.layout";


export function mapStateToProps(state: State) {
    return {
        isLoading: state.reducerA.isLoading
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
       dispatchToggleIsLoading: () => dispatch({type: "TOGGLE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);