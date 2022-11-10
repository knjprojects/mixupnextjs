import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk';
import * as actionTypes from './actionTypes';


//Action Creator
export const incrementCounter = () => ({
    type: actionTypes.DECREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: actionTypes.DECREMENT_COUNTER
});


//not sure if below code is NATIVE_TOKEN_ADDRESS
//Example of the async actoins with redux-tunk
export const incrementCounterAsync = () => (dispatch:any) => {
    setTimeout(() => {
        dispatch(actionTypes.INCREMENT_COUNTER);
    }, 2000);
};