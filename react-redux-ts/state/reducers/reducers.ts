import { ActionTypes } from "../action-types";
import { ExampleAction } from "../interfaces/interfaces";

export const example = (state = "", action: ExampleAction) => {
	switch (action.type) {
		case ActionTypes.EXAMPLE:
			return action.payload;
		default:
			return state;
	}
};