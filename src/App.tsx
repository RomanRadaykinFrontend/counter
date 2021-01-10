import React, {ChangeEvent, useState} from 'react';
import './App.css';
import MainSetField from "./components/MainSetField/MainSetField";
import MainActionField from "./components/MainActionField/MainActionField";




type CountType = number

type StateType = {
    maxValue: number
    startValue: number
    count: number
    typeOfMessage: boolean
    messageValue: boolean
}


function App() {

    let [state, setState] = useState<StateType>({
        maxValue: 0,
        startValue: 0,
        count: 0,
        typeOfMessage: false,
        messageValue: true
    });


    let valueErrorButtonInput = (state.startValue === 0 && state.maxValue === 0) || state.startValue < 0 || state.maxValue < 0 || state.maxValue === state.startValue || state.startValue > state.maxValue;

    function incrementButton() {
        state.count += 1;
        setState({...state})
    }

    function resetButton() {
        state.count = state.startValue;
        setState({...state})
    }

    function MaxValueOnChangeEvent(e: ChangeEvent<HTMLInputElement>) {
        state.maxValue = +e.currentTarget.value;
        state.typeOfMessage = false
        setState({...state});
    }


    function StartValueOnChangeEvent(e: ChangeEvent<HTMLInputElement>) {
        state.startValue = +e.currentTarget.value;
        state.typeOfMessage = false
        setState({...state})
    }

    function setButton() {
        state.count = state.startValue;
        state.typeOfMessage = true
        setState({...state})
    }


    return (

        <div className="AppWrapper">
            <div className='App'>
                <MainSetField maxValue={state.maxValue}
                              startValue={state.startValue}
                              MaxValueOnChangeEvent={MaxValueOnChangeEvent}
                              StartValueOnChangeEvent={StartValueOnChangeEvent}
                              setButton={setButton} title={'set'}
                              valueErrorButtonInput={valueErrorButtonInput}/>
            </div>
            <div className='App'>
                <MainActionField count={state.count}
                                 maxValue={state.maxValue}
                                 startValue={state.startValue}
                                 valueErrorButtonInput={valueErrorButtonInput}
                                 typeOfMessage={state.typeOfMessage}
                                 incrementButton={incrementButton}
                                 resetButton={resetButton}
                                 valueOfButtonReset={state.count === state.startValue}
                                 valueOfButtonIncrement={!(state.count >= 0) || state.count === state.maxValue}/>

            </div>


        </div>
    );
}

export default App;
//messageValue={state.messageValue}

/*        if(valueSetButton === true){
            state.messageValue = true
        } else {
            state.messageValue = false
        }*/
