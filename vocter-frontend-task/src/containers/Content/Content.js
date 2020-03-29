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
            comingSoonFilms: [],
            mostPopularFilms: [],
            filtredComingSoonFilms: [],
            filtredMostPopularFilms: [],
            comingSoonView: MenuHeaderValues.GRID,
            mostPopularView: MenuHeaderValues.GRID,
            comingSoonActiveBtn: MenuHeaderValues.ALL,
            mostPopularActiveBtn: MenuHeaderValues.ALL
        }
    }

    componentDidMount() {
        fetch(ApiConstants.FILM_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(jsonData => {
                this.initialSorting(jsonData);
            })
            .catch(error => {
                console.error(error);
            });
    }

    initialSorting(data) {

        let filtredComingSoonFilms = data.filter((film) => film.hasOwnProperty(MenuHeaderValues.EXPECTATION_COUNT));
        let filtredMostPopularFilms = data.filter((film) => film.hasOwnProperty(MenuHeaderValues.RANK));

        this.setState({
            comingSoonFilms: filtredComingSoonFilms,
            mostPopularFilms: filtredMostPopularFilms,
            filtredComingSoonFilms: filtredComingSoonFilms,
            filtredMostPopularFilms: filtredMostPopularFilms
        })
    }

    sortingByFilmType(sectionType, type) {
        let filteredFilms = sectionType;

        if (type !== MenuHeaderValues.ALL) {
            filteredFilms = sectionType.filter((film) => film.type === type);
        }
        return filteredFilms;
    }

    sortComingSoon(type, typeConst) {
        const { comingSoonFilms } = this.state;

        this.setState({
            filtredComingSoonFilms: this.sortingByFilmType(comingSoonFilms, type),
            comingSoonActiveBtn: typeConst
        });
    }

    sortMostPopular(type, typeConst) {
        const { mostPopularFilms } = this.state;

        this.setState({
            filtredMostPopularFilms: this.sortingByFilmType(mostPopularFilms, type),
            mostPopularActiveBtn: typeConst
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
        const { filtredComingSoonFilms,
            filtredMostPopularFilms,
            comingSoonView,
            mostPopularView,
            comingSoonActiveBtn,
            mostPopularActiveBtn } = this.state;

        return (
            <div>
                <Menu
                    title={MenuHeaderConstants.COMING_SOON}
                    sortByType={(type, typeConst) => this.sortComingSoon(type, typeConst)}
                    loadView={(view) => this.loadComingSoonView(view)}
                    activeBtn={comingSoonActiveBtn}
                />
                <ComingSoon
                    films={filtredComingSoonFilms}
                    view={comingSoonView} />

                <Menu
                    title={MenuHeaderConstants.MOST_POPULAR}
                    sortByType={(type, typeConst) => this.sortMostPopular(type, typeConst)}
                    loadView={(view) => this.loadMostPopularView(view)}
                    activeBtn={mostPopularActiveBtn} />
                <MostPopular
                    films={filtredMostPopularFilms}
                    view={mostPopularView} />
            </div>
        );
    }
}

export default Content;