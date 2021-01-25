import {StateType} from "./Types";

export function saveState(key: string, state: StateType){
    const saveState = JSON.stringify(state);
    localStorage.setItem(key, saveState)
}


export function restoreState(key: string, defaultState: StateType) {
    const state = localStorage.getItem(key);
    if (state !== null) defaultState = JSON.parse(state);
    return defaultState;
}
