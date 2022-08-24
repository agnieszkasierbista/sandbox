import {connect} from "react-redux"
import {Dispatch} from "redux";
import { LoadingStarsState, State } from "./App.types";
import { Scroll } from "./Scroll";


export function mapStateToProps(state: State) {
    return {
        isUploading: state.reducerD.isUploading,
        shouldShowImg: state.reducerD.shouldShowImg
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
       dispatchStartUploading: () => dispatch({type: "START"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);