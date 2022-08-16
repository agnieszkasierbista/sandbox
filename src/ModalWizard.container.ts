import { Dispatch } from "redux";
import { connect } from "react-redux"
import { ModalState, State } from "./App.types";
import { ModalWizard } from "./ModalWizard";

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalWizard);