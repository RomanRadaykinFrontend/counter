import React, {ChangeEvent} from 'react';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type MainSetFieldType = {
    maxValue: number
    startValue: number
    MaxValueOnChangeEvent:(e: ChangeEvent<HTMLInputElement>) => void
    StartValueOnChangeEvent:(e: ChangeEvent<HTMLInputElement>) => void
    setButton: () => void
    title: string
    valueErrorButtonInput: boolean
}

function MainSetField(props: MainSetFieldType){
    return(
        <div>
            <InputComponent inputName={'Max value:'} value={props.maxValue} inputOnChangeFunction={props.MaxValueOnChangeEvent}/>
            <InputComponent inputName={'Start value:'} value={props.startValue} inputOnChangeFunction={props.StartValueOnChangeEvent}/>
            <ButtonComponent functionButton={props.setButton} title={'set'} activeButton={props.valueErrorButtonInput} />
        </div>
    )
}

export default MainSetField