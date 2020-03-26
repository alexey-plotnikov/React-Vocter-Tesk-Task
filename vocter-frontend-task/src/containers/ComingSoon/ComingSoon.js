import React from 'react';
import Slider from "react-slick";

import GridView from 'components/GridView/GridView';
import ListView from 'components/ListView/ListView';



class ComingSoon extends React.Component {

    render() {

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true
        };

        const { films, view } = this.props;

        if (view === 'GRID') {
            return (
                <div>
                    <Slider {...settings}>
                        {
                            films.map(({ id, title, year, director,
                                writer, poster, genres, type,
                                rang, likes_count, comments_count,
                                link, expectations_count, content }) => (
                                    <GridView
                                        key={id}
                                        title={title}
                                        year={year}
                                        director={director}
                                        poster={poster}
                                    />
                                ))
                        }
                    </Slider>
                </div>
            );
        } else if (view === 'LIST') {
            return (
                <div>
                    <ul>
                        {
                            films.map(({ id, title, year, director,
                                writer, poster, genres, type,
                                rang, likes_count, comments_count,
                                link, expectations_count, content }) => (
                                    <li key={id}>
                                        <ListView
                                            title={title}
                                            year={year}
                                            director={director}
                                            poster={poster} />
                                    </li>
                                ))
                        }
                    </ul>

                </div>
            )
        }

    }
}

export default ComingSoon;