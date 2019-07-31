import { createStore, applyMiddleware } from "redux";
import dashboardReducer from "./dashboard.reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export default function configureStore(){
    let store = createStore(
        dashboardReducer,
        applyMiddleware(thunk,logger)
    );
    return store;
}