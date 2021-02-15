import React from 'react';
import './App.css';
import MainSetField from "./components/MainSetField/MainSetField";
import MainActionField from "./components/MainActionField/MainActionField";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./components/store/store";
import {StateType} from './components/store/counterReducer';


function App() {

    let state = useSelector<AppRootStateType, StateType>(state => state.counter);
    let valueErrorButtonInput = (state.startValue === 0 && state.maxValue === 0)
        || state.startValue < 0
        || state.maxValue < 0
        || state.maxValue === state.startValue
        || state.startValue > state.maxValue;

    return (

        <div className="AppWrapper">
            <div className='App'>
                {state.typeOfWindow && <MainSetField valueErrorButtonInput={valueErrorButtonInput}/>}
                {!state.typeOfWindow && <MainActionField valueErrorButtonInput={valueErrorButtonInput}
                                                         valueOfButtonReset={state.count === state.startValue}
                                                         valueOfButtonIncrement={!(state.count >= 0) || state.count === state.maxValue}/>}

            </div>

        </div>
    );
}

export default App;
