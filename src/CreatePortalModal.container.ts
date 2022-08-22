import { CreatePortalModal } from "./CreatePortalModal";
import { Dispatch } from "redux";
import { connect } from "react-redux"
import { State } from "./App.types";
import {cancel, cancelAndClose, cancelX, close, confirmX, save, confirm, clear, confirmAndClose,  } from "./actions";

function mapStateToProps(state: State) {
    return{
        isModalVisible: state.reducerB.isModalVisible,
        creator: state.reducerB.creator,
        background: state.reducerB.background,
        color: state.reducerB.color,
        blur: state.reducerB.blur,
        xButton: state.reducerB.xButton,
        cancelButton: state.reducerB.cancelButton,
        confirmButton: state.reducerB.confirmButton,
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchToggleModalVisibility: () => dispatch({type: "MODAL_TOGGLE"}),
        dispatchClose: () => dispatch(close()),
        dispatchCancelX: () => dispatch(cancelX()),
        dispatchConfirmX: () => dispatch(confirmX()),
        dispatchCancel: () => dispatch(cancel()),
        dispatchClear: () => dispatch(clear()),
        dispatchCancelAndClose: () => dispatch(cancelAndClose()),
        dispatchConfirm: () => dispatch(confirm()),
        dispatchSave: () => dispatch(save()),
        dispatchConfirmAndClose: () => dispatch(confirmAndClose()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePortalModal);