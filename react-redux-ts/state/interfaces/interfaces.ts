import { ActionTypes } from "../action-types";

export interface ExampleAction {
    type: ActionTypes.EXAMPLE;
    payload: string;
}