import {Dispatch} from "redux";
import {connect} from "react-redux"
import {FormFieldNameAndValueArray, State} from "../App/App.types";
import {ModalWizard} from "./ModalWizard";

function mapStateToProps(state: State) {
    return {
        isModalVisible: state.reducerB.isModalVisible
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchToggleModalVisibility: () => dispatch({type: "MODAL_TOGGLE"}),
        dispatchUpdateWizardValues: (values: FormFieldNameAndValueArray) => dispatch({
            type: "UPDATE_WIZARD_VALUES",
            payload: values
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWizard);