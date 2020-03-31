import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Content from './containers/Content/Content';
import Footer from './components/Footer/Footer'

class App extends React.Component {

    render() {
        return (
            <div className='main-wrapper'>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;