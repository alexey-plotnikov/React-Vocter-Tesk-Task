import React from 'react';
import Slider from "react-slick";

import GridViewItem from 'components/GridView/GridViewItem';
import SliderSettings from 'common/sliderSettings';
import './GridView.scss';

const GridView = (props) => {

    const { films } = props;

    return (
        <div className='test'>
            <Slider {...SliderSettings.HORIZONTAL}>
                {
                    films.map(({ id, title, year, director,
                        writer, poster, genres, type,
                        rank, likes_count, comments_count,
                        link, expectations_count, content }) => (
                            <GridViewItem
                                key={id}
                                title={title}
                                year={year}
                                poster={poster}
                                commentsCount={comments_count}
                                likesCount={likes_count}
                                rank={rank}
                                expectationsCount={expectations_count}
                            />
                        ))
                }
            </Slider>
        </div>
    );
}

export default GridView;