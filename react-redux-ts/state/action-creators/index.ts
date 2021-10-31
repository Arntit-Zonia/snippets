import { Dispatch } from "redux";

import { ActionTypes } from "../action-types";
import { ExampleAction } from "../interfaces/interfaces";

export const setExample = (value: string) => (dispatch: Dispatch<ExampleAction>) => {
    dispatch({ type: ActionTypes.EXAMPLE, payload: value });
}