import React from 'react';

import Header from './components/Header/Header';
import Content from './containers/Content/Content';
import Footer from './components/Footer/Footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;