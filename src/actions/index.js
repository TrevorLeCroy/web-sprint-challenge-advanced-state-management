import axios from 'axios';

export const SMURFS_LOADING         = 'smurfs_loading';
export const SMURFS_LOADED_SUCCESS  = 'smurfs_loaded_success';
export const SMURFS_LOADED_FAILURE  = 'smurfs_loaded_failure';

export const ADD_SMURF = 'add_smurf';

export function fetchSmurfs() {
    // const state = getState();
    // console.log(state);
    console.log('smurfs being fetched...');

    return async dispatch => {
        console.log('dispatching...');
        return await axios.get('http://localhost:3333/smurfs').then(({data}) => {
            dispatch(setSmurfData(data));
        })
        .catch(({err}) => {
            dispatch(setErrorMessage(err));
        })
    }
}

export const addSmurf = data => {
    return({type: ADD_SMURF, payload: data});
};

export const setSmurfData = data => {
    return ({type: SMURFS_LOADED_SUCCESS, payload: data});
}

export const setErrorMessage = data => {
    return({type: SMURFS_LOADED_FAILURE, payload: data});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.