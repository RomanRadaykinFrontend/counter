import React, {ChangeEvent} from 'react';
import CountField from "../CountField/CountField";
import ButtonField from "../ButtonField/ButtonField";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type MainActionFieldType = {
    count: number
    maxValue: number
    valueErrorButtonInput: boolean
    incrementButton: () => void
    resetButton: () => void
    valueOfButtonReset: boolean
    valueOfButtonIncrement: boolean
    setButton: () => void
}


function MainActionField(props: MainActionFieldType){
    return(
        <div>
            <CountField count={props.count} maxCount={props.maxValue}/>
            <ButtonField incrementButton={props.incrementButton}
                                                 resetButton={props.resetButton}
                                                 valueOfButtonReset={props.valueOfButtonReset}
                                                 valueOfButtonIncrement={props.valueOfButtonIncrement}/>
            <ButtonComponent functionButton={props.setButton} title={'set'} activeButton={props.valueErrorButtonInput} />
        </div>
    )
}

export default MainActionField