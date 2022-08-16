import { Dispatch } from "redux";
import { connect } from "react-redux"
import { CustomModal } from "./CustomModal"
import { ModalState, State } from "./App.types";

function mapStateToProps(state: State) {
    return{
        isModalVisible: state.reducerB.isModalVisible
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchToggleModalVisibility: () => dispatch({type: "TOGGLE_MODAL"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);