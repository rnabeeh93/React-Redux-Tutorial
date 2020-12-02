import React from 'react'
import {connect} from 'react-redux'
import {buyCake, buyIcecream} from '../redux'

//Show cases mapStateToProps second parameter, this component will be usable for cake or icecream
function ItemContainer(props) {
    return (
        <div>
            <h2>{props.name} - {props.item}</h2>      
            <button onClick={props.buyItem}>Buy {props.name}</button>      
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
    return{
        item: itemState,
        name: ownProps.cake ? "Cake" : "Icecream"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream())

    return {
        buyItem: dispatchFunction
    }
}

//! You can mapdispatch without state if you don't want to get the state just write to it
//? connect(null, mapDispatchToProps)(ItemContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
