import { createStore } from "redux";
import dashboardReducer from "./dashboard.reducer";

export default function configureStore(){
    let store = createStore(dashboardReducer);
    return store;
}