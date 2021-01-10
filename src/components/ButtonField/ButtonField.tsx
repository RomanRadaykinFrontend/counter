import React from 'react';
import '../../App.css';
import ButtonComponent from "../ButtonComponent/ButtonComponent";


type ButtonFieldProps = {
    incrementButton?: () => void
    resetButton?: () => void
    setButton?: () => void
    valueOfButtonReset?: boolean
    valueOfButtonIncrement?: boolean
    valueOfButtonSet?: boolean
}

function ButtonField(props: ButtonFieldProps) {


    return (
        <div className="ButtonField">

            <ButtonComponent functionButton={props.incrementButton && props.incrementButton}
                             activeButton={props.valueOfButtonIncrement && props.valueOfButtonIncrement}
                             title={'inc'}/>

            <ButtonComponent functionButton={props.resetButton && props.resetButton}
                             activeButton={props.valueOfButtonReset && props.valueOfButtonReset}
                             title={'reset'}/>

        </div>
    )

}

export default ButtonField;
