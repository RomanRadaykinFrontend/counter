import React from 'react';
import '../../App.css';

type CountFieldProps = {
    count: number
    maxCount: number
}



function CountField({count, maxCount}: CountFieldProps) {
    return (

        <div className={count === maxCount ? 'MaxCount' : ''}>
           <span className='countMessageStyle'>
               {count}
           </span>
        </div>
    );
}

export default CountField;
