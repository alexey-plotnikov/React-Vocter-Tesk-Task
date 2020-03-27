import React from 'react';

import Menu from 'components/Menu/Menu';
import ComingSoon from 'containers/ComingSoon/ComingSoon';
import MostPopular from 'containers/MostPopular/MostPopular';


import MenuHeaderValues from 'common/menuHeaderValues';
import { ApiConstants, MenuHeaderConstants } from 'common/constants';


class Content extends React.Component {

    constructor() {
        super();

        this.state = {
            films: [],
            filtredComingSoonFilms: [],
            filtredMostPopularFilms: [],
            comingSoonView: MenuHeaderValues.GRID,
            mostPopularView: MenuHeaderValues.GRID,
        }
    }

    componentDidMount() {
        fetch(ApiConstants.FILM_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(jsonData => {
                this.setState({
                    films: jsonData,
                });
                this.initialSorting()
            })
            .catch(error => {
                console.error(error);
            });
    }

    initialSorting() {
        const { films } = this.state;

        let filtredComingSoonFilms = films.filter((film) => film.hasOwnProperty(MenuHeaderValues.EXPECTATION_COUNT));
        let filtredMostPopularFilms = films.filter((film) => film.hasOwnProperty(MenuHeaderValues.RANK));

        this.setState({
            filtredComingSoonFilms: filtredComingSoonFilms,
            filtredMostPopularFilms: filtredMostPopularFilms
        })
    }

    // .then(jsonData => this.someMethod(jsonDatqa))
    // someMethod(sr) {
    //     this.setState({
    //         films: jsonData,
    //         filtredComingSoonFilms: jsonData,
    //         filtredMostPopularFilms: jsonData
    //     });
    // }

    sortingByFilmType(type) {
        const { films } = this.state;
        let filteredFilms = films;

        if (type !== MenuHeaderValues.ALL) {
            filteredFilms = films.filter((film) => film.type === type);
        }
        return filteredFilms;
    }

    sortComingSoon(type) {

        const { films } = this.state;
        let filteredFilms = films.filter((film) => film.hasOwnProperty(MenuHeaderValues.EXPECTATION_COUNT));;

        if (type !== MenuHeaderValues.ALL) {
            filteredFilms = filteredFilms.filter((film) => film.type === type);
        }

        this.setState({
            filtredComingSoonFilms: filteredFilms
        })
    }

    sortMostPopular(type) {
        let filteredFilms = this.sortingByFilmType(type);
        this.setState({
            filtredMostPopularFilms: filteredFilms
        })
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
        const { films, filtredComingSoonFilms, filtredMostPopularFilms, comingSoonView, mostPopularView } = this.state;

        return (
            <div>
                <Menu
                    title={MenuHeaderConstants.COMING_SOON}
                    sortByType={(type) => this.sortComingSoon(type)}
                    loadView={(view) => this.loadComingSoonView(view)} />
                <ComingSoon
                    films={filtredComingSoonFilms}
                    view={comingSoonView} />

                <Menu
                    title={MenuHeaderConstants.MOST_POPULAR}
                    sortByType={(type) => this.sortMostPopular(type)}
                    loadView={(view) => this.loadMostPopularView(view)} />
                <MostPopular
                    films={filtredMostPopularFilms}
                    view={mostPopularView} />
            </div>
        );
    }
}

export default Content;