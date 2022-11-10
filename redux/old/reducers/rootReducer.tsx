//do i even need this rootreducer?


import counterReducer from '../../features/counterSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;
