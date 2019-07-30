import Actions from "./actions";
import branchModel from "../models/branchModel";

const initialState = {
    branches: branchModel.branches
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.ActionType.SHOW_BRANCH_DATA:{
        console.log("กำลังจะแสดงข้อมูลสาขา");
        
        return { ...state, ...payload }
    }
        

    default:
        return state
    }
}
