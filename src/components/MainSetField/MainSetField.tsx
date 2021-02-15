import React, {ChangeEvent} from 'react';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {changeMaxValueAC, changeStartValueAC, setButtonActionAC, StateType} from "../store/counterReducer";

type MainSetFieldType = {
    valueErrorButtonInput: boolean
}

function MainSetField(props: MainSetFieldType){

    const state = useSelector<AppRootStateType, StateType>(state => state.counter);
    const dispatch = useDispatch()

    function changeMaxValueOnEvent(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeMaxValueAC(e.currentTarget.value))
    }
    function changeStartValueOnEvent(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeStartValueAC(e.currentTarget.value))
    }
    function setButton() {
        dispatch(setButtonActionAC())
    }

    return(
        <div>
            <InputComponent inputName={'Max value:'}
                            value={state.maxValue}
                            valueErrorButtonInput={props.valueErrorButtonInput}
                            inputOnChangeFunction={changeMaxValueOnEvent}/>
            <InputComponent inputName={'Start value:'}
                            value={state.startValue}
                            valueErrorButtonInput={props.valueErrorButtonInput}
                            inputOnChangeFunction={changeStartValueOnEvent}/>
            <ButtonComponent functionButton={setButton}
                             title={'set'}
                             activeButton={props.valueErrorButtonInput} />
        </div>
    )
}

export default MainSetField