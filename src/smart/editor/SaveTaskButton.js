import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {getTaskEditorTaskValidationResult} from "../../selectors/ui";
import {closeTaskEditor, saveEditorTask} from "../../actions/ui";

const mapStateToProps = (state) => {
    const disabled = !getTaskEditorTaskValidationResult(state).result;

    return {
        content: "SAVE",
        disabled,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(saveEditorTask());
            dispatch(closeTaskEditor());
        }
    };
};

export const SaveTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveButton);