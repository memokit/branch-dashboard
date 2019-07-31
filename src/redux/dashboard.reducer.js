import Actions from "./actions";
import branchModel from "../models/branchModel";

const initialState = {
    branches: [],
    branchDataInChart: [
        ['Month', 'Amount'],
        ['', 0]
    ],
    app: {
        notification: {}
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case Actions.ActionType.SHOW_BRANCH_DATA: {
            console.log(`กำลังจะแสดงข้อมูลสาขา ${payload}`);

            let selectingBranch = branchModel.branches.find(branch => {
                return branch.id === payload;
            })

            if (selectingBranch) {
                let finalChartData = []

                finalChartData.push(selectingBranch.chartData.chartField);

                let chartDatas = selectingBranch.chartData.datas;

                if (chartDatas && chartDatas.length > 0) {
                    chartDatas.forEach(data => {
                        finalChartData.push([data.month, data.amount]);
                    })
                } else {
                    finalChartData.push(['', 0]);
                }

                console.log(finalChartData);

                return {
                    ...state,
                    branchDataInChart: finalChartData
                }

            } else {
                return { ...state, ...payload }
            }
        }

        case Actions.ActionType.REQUEST_INIT_DATA_SUCCESS: {
            console.log('request success');

            return {
                ...state,
                branches: payload.branches,
                app: {
                    notification: {
                        message: 'Data Loaded',
                        isError: false,
                        isShow: true
                    }
                }
            }
        }

        case Actions.ActionType.REQUEST_INIT_DATA_FAILED: {
            console.log('request failed');
            return {
                ...state,
                app: {
                    notification: {
                        message: payload.message,
                        isError: true,
                        isShow: true
                    }
                }
            }
        }

        default:
            return state
    }
}
