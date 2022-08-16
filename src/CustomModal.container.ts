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
        dispatchToggleModalVisibility: () => dispatch({type: "MODAL_TOGGLE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);