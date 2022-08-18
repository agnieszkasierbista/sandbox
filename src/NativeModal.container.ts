import { NativeModal } from "./NativeModal";
import { Dispatch } from "redux";
import { connect } from "react-redux"
import { State } from "./App.types";

function mapStateToProps(state: State) {
    return{
        isModalVisible: state.reducerB.isModalVisible,
        creator: state.reducerB.creator,
        background: state.reducerB.background,
        color: state.reducerB.color
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchToggleModalVisibility: () => dispatch({type: "MODAL_TOGGLE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NativeModal);