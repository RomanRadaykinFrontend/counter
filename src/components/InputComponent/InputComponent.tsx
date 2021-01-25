import React, {ChangeEvent} from 'react';

type InputComponentProps = {
    value: number
    inputOnChangeFunction:(e: ChangeEvent<HTMLInputElement>) => void
    inputName: string
    valueErrorButtonInput: boolean
}

function InputComponent(props: InputComponentProps){
    return(
        <div className='inputClass'>
            <span>{props.inputName}</span>
            <input value={props.value}
                   className={props.valueErrorButtonInput ? 'inputError' : ''}
                   onChange={props.inputOnChangeFunction}
                   type="number"/>
        </div>

    )
}

export default InputComponent