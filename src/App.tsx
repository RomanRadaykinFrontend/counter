import React, {ChangeEvent, useState} from 'react';
import './App.css';
import MainSetField from "./components/MainSetField/MainSetField";
import MainActionField from "./components/MainActionField/MainActionField";
import {restoreState, saveState} from "./localStorage";
import {StateType} from "./Types";


function App() {

    let defaultState: StateType = {
        maxValue: 0,
        startValue: 0,
        count: 0,
        typeOfMessage: false,
        typeOfWindow: true
    };

    let [state, setState] = useState<StateType>(restoreState('state', defaultState));


    let valueErrorButtonInput = (state.startValue === 0 && state.maxValue === 0)
        || state.startValue < 0
        || state.maxValue < 0
        || state.maxValue === state.startValue
        || state.startValue > state.maxValue;

    function incrementButton() {
        state.count += 1;
        setState({...state});
        saveState('state', state)
    }

    function resetButton() {
        state.count = state.startValue;
        setState({...state});
        saveState('state', state)
    }

    function MaxValueOnChangeEvent(e: ChangeEvent<HTMLInputElement>) {
        state.maxValue = +e.currentTarget.value;
        state.typeOfMessage = false;
        setState({...state});
        saveState('state', state)
    }


    function StartValueOnChangeEvent(e: ChangeEvent<HTMLInputElement>) {
        state.startValue = +e.currentTarget.value;
        state.typeOfMessage = false;
        setState({...state});
        saveState('state', state)
    }

    function setButton() {
        state.count = state.startValue;
        state.typeOfMessage = true;
        state.typeOfWindow = !state.typeOfWindow;
        setState({...state});
        saveState('state', state)
    }

    return (

        <div className="AppWrapper">
            <div className='App'>
                {state.typeOfWindow && <MainSetField maxValue={state.maxValue}
                                                     startValue={state.startValue}
                                                     MaxValueOnChangeEvent={MaxValueOnChangeEvent}
                                                     StartValueOnChangeEvent={StartValueOnChangeEvent}
                                                     setButton={setButton}
                                                     valueErrorButtonInput={valueErrorButtonInput}/>}
                {!state.typeOfWindow && <MainActionField count={state.count}
                                                         maxValue={state.maxValue}
                                                         valueErrorButtonInput={valueErrorButtonInput}
                                                         incrementButton={incrementButton}
                                                         resetButton={resetButton}
                                                         setButton={setButton}
                                                         valueOfButtonReset={state.count === state.startValue}
                                                         valueOfButtonIncrement={!(state.count >= 0) || state.count === state.maxValue}/>}

            </div>

        </div>
    );
}

export default App;
