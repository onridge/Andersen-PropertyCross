import React from 'react';
import SearchBarPure from '../components/SearchBar/SeachBarPure';
import Description from '../components/TextContent/Description/Description';
import Layout from '../components/Layout/Layout';

class MainPage extends React.PureComponent {
    render() {
        return (
            <Layout>
                <div>
                    <Description>
                        Use the form below to search for houses to buy. You can search by place-name, postcode, or click
                        &apos;My location&apos;, to search in your current location
                    </Description>
                    <SearchBarPure />
                </div>
            </Layout>
        );
    }
}

export default MainPage;
