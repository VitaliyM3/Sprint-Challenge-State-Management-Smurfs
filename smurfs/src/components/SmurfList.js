import React from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfList = (props) => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurfs();
    };

    return (
        <>
      <h2>Smurf List</h2>
      {props.isFetching && <p>Getting your Smurfs</p>}
      <div>
        {props.smurfs.map(smurf => (
          <h4 key={smurf.id}>{smurf.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchSmurf}>Get Smurfs</button>
    </>
    )
};

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, {getSmurfs})(SmurfList);