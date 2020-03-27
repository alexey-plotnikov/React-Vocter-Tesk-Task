import React from 'react';
import Slider from "react-slick";

import GridView from 'components/GridView/GridView';
import ListView from 'components/ListView/ListView';
import SliderSettings from 'common/sliderSettings';

class MostPopular extends React.Component {

    render() {
        
        const { films, view } = this.props;

        if (view === 'GRID') {
            return (
                <div>
                    <Slider {...SliderSettings.HORIZONTAL}>
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
                    <Slider {...SliderSettings.VERTICAL}>
                        {
                            films.map(({ id, title, year, director,
                                writer, poster, genres, type,
                                rang, likes_count, comments_count,
                                link, expectations_count, content }) => (
                                    <ListView
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
            )
        }

    }
}

export default MostPopular;