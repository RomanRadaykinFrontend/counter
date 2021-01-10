import React from 'react';
import '../../App.css';

type ButtonComponentProps = {
    functionButton?: () => void
    activeButton?: boolean
    title: string
    maxValue?: number
    startValue?: number
    count?: number
}


function ButtonComponent(props: ButtonComponentProps) {

    let functionCallback = props.functionButton
    return (
        <div className="ButtonComponent">
            <button className={!props.activeButton ? 'ButtonStyle' : 'ButtonDisabled' } onClick={functionCallback}
                    disabled={props.activeButton}>{props.title}</button>
        </div>
    );
}

export default ButtonComponent;
