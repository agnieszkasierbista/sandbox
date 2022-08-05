import {connect} from "react-redux"
import {Dispatch} from "redux";
import Form from "./Form";
import { State } from "./App.types";


export function mapStateToProps(state: State) {
    console.log(state, "state")
    return {
        values: state.values,
        isFetching: state.isFetching
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchSetDropdownContent: () => dispatch({type: "ABC"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);