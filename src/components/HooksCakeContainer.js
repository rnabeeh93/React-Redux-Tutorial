import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux';

//? useSelector can be used as a replacement for connect in CakeContainer
//! using hooks can be complicated as connect answers the zombie and staleprop edge cases but hooks are simpler for all other cases

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}



export default HooksCakeContainer
