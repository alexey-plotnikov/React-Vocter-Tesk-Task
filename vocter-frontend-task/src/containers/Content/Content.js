import React from 'react';

import Menu from 'components/Menu/Menu';
import ComingSoon from 'containers/ComingSoon/ComingSoon';
import MostPopular from 'containers/MostPopular/MostPopular'


class Content extends React.Component {

    filmsListUrl = 'https://api.myjson.com/bins/p2dnz';

    view = {
        GRID: 'GRID',
        LIST: 'LIST'
    }

    constructor() {
        super();

        this.state = {
            films: [],
            comingSoonTitle: 'Coming Soon',
            mostPopularTitle: 'Most Popular',
            comingSoonView: 'GRID',
            mostPopularView: 'GRID',
        }
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/p2dnz', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(jsonData => {
                this.setState({
                    films: jsonData,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    loadComingSoonView(view) {
        this.setState({
            comingSoonView: view
        })
    }

    loadMostPopularView(view) {
        this.setState({
            mostPopularView: view
        })
    }

    render() {
        const { films, comingSoonTitle, mostPopularTitle, comingSoonView, mostPopularView } = this.state;

        return (
            <div>
                <Menu
                    title={comingSoonTitle}
                    loadView={(view) => this.loadComingSoonView(view)} />
                <ComingSoon
                    films={films}
                    view={comingSoonView} />

                <Menu
                    title={mostPopularTitle}
                    loadView={(view) => this.loadMostPopularView(view)} />
                <MostPopular
                    films={films}
                    view={mostPopularView} />
            </div>
        );
    }
}

export default Content;