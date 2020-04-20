import React, { useState } from "react";
import {addSmurfs} from '../actions';
import { useDispatch } from "react-redux";

const SmurfForm = (props) => {
    const dispatch = useDispatch();
    const [addSmurf, setAddSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addSmurfs(addSmurf));
        setAddSmurf({name: '', age: '', height: ''});
    }

    const handleChanges = e => {
        setAddSmurf({ ...addSmurf, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="name"
            value={addSmurf.name}
            onChange={handleChanges}
            />
            <input 
            type="text"
            name="age"
            placeholder="age"
            value={addSmurf.age}
            onChange={handleChanges}
            />
            <input
            type="text"
            name="height"
            placeholder="height"
            value={addSmurf.height}
            onChange={handleChanges}
            />
            <button type="submit" >Add Smurf</button>
        </form>
    );
};

export default SmurfForm;