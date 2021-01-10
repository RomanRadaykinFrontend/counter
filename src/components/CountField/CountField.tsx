import React from 'react';
import '../../App.css';

type CountFieldProps = {
    count: number
    maxCount: number
    valueErrorButtonInput: boolean
    typeOfMessage: boolean //true false
}



function CountField({count, maxCount, valueErrorButtonInput,typeOfMessage }: CountFieldProps) {
    return (

        <div className={count === maxCount ? 'MaxCount' : ''}>

            {typeOfMessage ? <span className='countMessageStyle'>{count}</span>
                : valueErrorButtonInput ? <span className='error countMessageStyle'>{'Incorrect value!'}</span>
                    : <span className='countMessageStyle'>{'Enter values and press SET'}</span>}
        </div>
    );
}

export default CountField;
