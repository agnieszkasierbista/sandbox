import {connect} from "react-redux"
import {Dispatch} from "redux";
import { Progress } from "./Progress.layout";


export function mapStateToProps(state: {isLoading: boolean}) {
    return {
        isLoading: state.isLoading
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
       dispatchToggleIsLoading: () => dispatch({type: "TOGGLE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);