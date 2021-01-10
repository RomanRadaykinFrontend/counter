import React, {ChangeEvent} from 'react';
import CountField from "../CountField/CountField";
import ButtonField from "../ButtonField/ButtonField";

type MainActionFieldType = {
    count: number
    maxValue: number
    startValue: number
    valueErrorButtonInput: boolean
    typeOfMessage: boolean
    incrementButton: () => void
    resetButton: () => void
    valueOfButtonReset: boolean
    valueOfButtonIncrement: boolean
}


function MainActionField(props: MainActionFieldType){
    return(
        <div>
            <CountField count={props.count} maxCount={props.maxValue} valueErrorButtonInput={props.valueErrorButtonInput} typeOfMessage={props.typeOfMessage}/>
            {props.typeOfMessage && <ButtonField incrementButton={props.incrementButton}
                                                 resetButton={props.resetButton}
                                                 valueOfButtonReset={props.valueOfButtonReset}
                                                 valueOfButtonIncrement={props.valueOfButtonIncrement}/>}
        </div>
    )
}

export default MainActionField