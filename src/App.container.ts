import {connect} from "react-redux"
import {Dispatch} from "redux";
import App from "./App";


export function mapStateToProps(state: any) {

}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchSetDropdownContent: () => dispatch({type: "ABC"})
    }
}

export default connect(null, mapDispatchToProps)(App);