import React from 'react';
import { Redirect } from 'react-router';
import PropertyList from '../PropertyList/PropertyList';
import ErrorContent from '../Error/Error';
import addRecentCityInList from '../../actions/addRecentCityInList';
import getLocation from '../../actions/getLocation';
import styles from './SearchBar.css';

class SearchBarPure extends React.PureComponent {
    state = {
        value: '',
        isRedirect: false,
        errorMessage: '',
    };

    handleChange = (e) => {
        const { value } = e.target;

        return this.setState({ value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { value } = this.state;

        return addRecentCityInList(value)
            .then(() => this.setState({ isRedirect: true }))
            .catch((err) => this.setState({ errorMessage: err.toString() }));
    };

    handleLocationClick = () => {
        return getLocation()
            .then((placeName) => this.setState({ isRedirect: true, value: `${placeName}` }))
            .catch((err) => this.setState({ errorMessage: err.toString() }));
    };

    render() {
        const { value, isRedirect, errorMessage } = this.state;

        if (isRedirect) {
            return <Redirect to={`/results/${value}`} />;
        }

        return (
            <form onSubmit={this.handleSubmit} className={styles.searchForm}>
                <input
                    className={styles.inputField}
                    onChange={this.handleChange}
                    value={value}
                    placeholder="newcastle"
                />
                <div className={styles.buttonContainer}>
                    <div>
                        <button type="submit" className={styles.searchFormButton}>
                            Go
                        </button>
                    </div>
                    <button type="button" className={styles.searchFormButton} onClick={this.handleLocationClick}>
                        My location
                    </button>
                </div>
                {errorMessage === '' ? <PropertyList /> : <ErrorContent errorMessage={errorMessage} />}
            </form>
        );
    }
}

export default SearchBarPure;
