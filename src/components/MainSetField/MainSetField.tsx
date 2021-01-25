import React, {ChangeEvent} from 'react';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type MainSetFieldType = {
    maxValue: number
    startValue: number
    MaxValueOnChangeEvent:(e: ChangeEvent<HTMLInputElement>) => void
    StartValueOnChangeEvent:(e: ChangeEvent<HTMLInputElement>) => void
    setButton: () => void
    valueErrorButtonInput: boolean
}

function MainSetField(props: MainSetFieldType){

    return(
        <div>
            <InputComponent inputName={'Max value:'}
                            value={props.maxValue}
                            valueErrorButtonInput={props.valueErrorButtonInput}
                            inputOnChangeFunction={props.MaxValueOnChangeEvent}/>
            <InputComponent inputName={'Start value:'}
                            value={props.startValue}
                            valueErrorButtonInput={props.valueErrorButtonInput}
                            inputOnChangeFunction={props.StartValueOnChangeEvent}/>
            <ButtonComponent functionButton={props.setButton}
                             title={'set'}
                             activeButton={props.valueErrorButtonInput} />
        </div>
    )
}

export default MainSetField