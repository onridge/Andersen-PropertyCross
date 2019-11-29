import React from 'react';
import { increment, decrement } from '../../redux/constants';
import { connect } from 'react-redux';
import style from './MainPage.css';
import PropTypes from 'prop-types';

class MainPage extends React.PureComponent {
    render() {
        return (
            <div>
                <h1 className={style.head}> Hello World </h1>
                <div className={style.counter}>
                    <button type="button" onClick={this.props.onIncrement}>
                        +1
                    </button>
                    <h2> {this.props.counter} </h2>
                    <button type="button" onClick={this.props.onDecrement}>
                        -1
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch({ type: increment }),
        onDecrement: () => dispatch({ type: decrement }),
    };
}

MainPage.propTypes = {
    counter: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
