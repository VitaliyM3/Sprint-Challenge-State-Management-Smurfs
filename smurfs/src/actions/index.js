import axios from "axios";

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

// export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
// export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';



export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        // .then(res => console.log(res, "this is the res"))
        .then(res =>
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const addSmurfs = (newSmurf) => dispatch => {
    // dispatch({ type: ADD_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res =>
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        )
        // .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }));
        .catch(err => {console.log(err)});
};