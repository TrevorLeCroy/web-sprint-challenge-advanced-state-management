import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = (props) => {
    const isLoading = !props.smurfsLoaded;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    const smurfs = props.smurfs;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {/* <Smurf smurf={testSmurf}/> */}
        {smurfs.map(smurf => {
            console.log(smurf)
            return <Smurf key={smurf.id} smurf={smurf}/>
        })}
    </div>);
}
const mapStateToProps = (state) => {
    return {
        smurfsLoaded: state.smurfsLoaded,
        smurfs:       state.smurfs
    };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.