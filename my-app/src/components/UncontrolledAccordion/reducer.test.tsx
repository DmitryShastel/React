import {reducer, StatePropsType, TOGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    //data:
    const state: StatePropsType = {
        collapsed: true
    }

    //action:
    const newState = reducer(state, {type: TOGLE_COLLAPSED})

    //expect:
    expect(newState.collapsed).toBe(false);
})
test('collapsed should be false', () => {
    //data:
    const state: StatePropsType = {
        collapsed: false
    }

    //action:
    const newState = reducer(state, {type: TOGLE_COLLAPSED})

    //expect:
    expect(newState.collapsed).toBe(true);
})
test('collapsed should be error', () => {
    //data:
    const state: StatePropsType = {
        collapsed: false
    }

    //action:
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError();

})