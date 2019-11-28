import React from 'react';
import {increment, decrement} from "../../redux/constants";
import {connect} from 'react-redux';
import style from './MainPage.css'

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <h1 className={style.head}> Hello World </h1>
                <div className={style.counter}>
                    <button onClick={this.props.onIncrement}> + </button>
                    <h2> {this.props.counter} </h2>
                    <button onClick={this.props.onDecrement}> - </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch({type: increment}),
        onDecrement: () => dispatch({type: decrement}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
