import React from 'react';
import CountField from "../CountField/CountField";
import ButtonField from "../ButtonField/ButtonField";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {incrementButtonAC, resetButtonActionAC, setButtonActionAC, StateType} from "../store/counterReducer";

type MainActionFieldType = {
    valueErrorButtonInput: boolean
    valueOfButtonReset: boolean
    valueOfButtonIncrement: boolean
}


function MainActionField(props: MainActionFieldType) {

    const state = useSelector<AppRootStateType, StateType>(state => state.counter);
    const dispatch = useDispatch();

    function incrementButton() {
        dispatch(incrementButtonAC())
    }

    function resetButton() {
        dispatch(resetButtonActionAC())
    }

    function setButton() {
        dispatch(setButtonActionAC())
    }


    return (
        <div>
            <CountField count={state.count} maxCount={state.maxValue}/>
            <ButtonField incrementButton={incrementButton}
                         resetButton={resetButton}
                         valueOfButtonReset={props.valueOfButtonReset}
                         valueOfButtonIncrement={props.valueOfButtonIncrement}/>
            <ButtonComponent functionButton={setButton} title={'set'} activeButton={props.valueErrorButtonInput}/>
        </div>
    )
}

export default MainActionField