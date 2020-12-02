import React, { useState } from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux'

//!This example uses a local state which decouples the state logic that redux is made for. Ask yourself the following before doing this
//? Do other parts of the application care about this data?
//? Do you need to be able to create further derived data based on this original data?
//? Is the same data being used to drive multiple components
//? Is there value in being able to restore the state to a given point in time (redux-devtools)

function InputCakeContainer(props) {
    const [number, setNumber] = useState(1);

    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={e=> setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCakeContainer) 
