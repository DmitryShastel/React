import {ActionPropsType} from "./UncontrolledAccordion";

export const TOGLE_COLLAPSED = "TOGGLE-COLAPSED"

export type StatePropsType = {
    collapsed: boolean
}

export const reducer = (state: StatePropsType, action: ActionPropsType): StatePropsType => {
    switch (action.type) {
        case TOGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
    return state;
}