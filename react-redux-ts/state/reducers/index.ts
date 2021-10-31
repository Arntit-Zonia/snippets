import { combineReducers } from "redux";

import { example } from "./reducers";

const reducers = combineReducers({
    example
});

export type State = ReturnType<typeof reducers>

export default reducers;