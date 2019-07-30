const ActionType = {
    SHOW_BRANCH_DATA: "SHOW_BRANCH_DATA"
}

const showBranchData = payload => ({
    type: ActionType.SHOW_BRANCH_DATA,
    payload: payload
});

export default {
    ActionType,
    showBranchData
}