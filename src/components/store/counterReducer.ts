const INCREMENT_BUTTON = 'INCREMENT_BUTTON';
const RESET_BUTTON = 'RESET_BUTTON';
const SET_BUTTON = 'SET_BUTTON';
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
const CHANGE_START_VALUE = 'CHANGE_START_VALUE';

let initialState = {
    maxValue: 0,
    startValue: 0,
    count: 0,
    typeOfWindow: true
};
export type StateType = typeof initialState


export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case INCREMENT_BUTTON:
            return {...state, count: state.count += 1}
        case RESET_BUTTON:
            return {...state, count: state.startValue}
        case SET_BUTTON:
            return {
                ...state,
                count: state.startValue,
                typeOfWindow: !state.typeOfWindow
            }
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: +action.newValue}
        case CHANGE_START_VALUE:
            return {...state, startValue: +action.newValue}
        default:
            return state
    }
}
type ActionsType =
    | ReturnType<typeof incrementButtonAC>
    | ReturnType<typeof resetButtonActionAC>
    | ReturnType<typeof setButtonActionAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeStartValueAC>

export const incrementButtonAC = () => ({type: INCREMENT_BUTTON} as const)
export const resetButtonActionAC = () => ({type: RESET_BUTTON} as const)
export const setButtonActionAC = () => ({type: SET_BUTTON} as const)
export const changeMaxValueAC = (newValue: string) => ({
    type: CHANGE_MAX_VALUE,
    newValue
} as const)
export const changeStartValueAC = (newValue: string) => ({
    type: CHANGE_START_VALUE,
    newValue
} as const)