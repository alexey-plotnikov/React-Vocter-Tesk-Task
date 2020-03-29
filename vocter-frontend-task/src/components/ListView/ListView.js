import React from 'react';
import Slider from "react-slick";

import ListViewItem from 'components/ListView/ListViewItem';
import SliderSettings from 'common/sliderSettings';
import './ListView.scss'

const ListVIew = (props) => {

    const { films } = props;

    return (
        <div>
            <Slider {...SliderSettings.VERTICAL}>
                {
                    films.map(({ id, title, year, director,
                        writer, poster, genres, type,
                        rank, likes_count, comments_count,
                        link, expectations_count, content }) => (
                            <ListViewItem
                                key={id}
                                title={title}
                                year={year}
                                poster={poster}
                                content={content}
                                commentsCount={comments_count}
                                rank={rank}
                                expectationsCount={expectations_count}
                                likesCount={likes_count}
                            />
                        ))
                }
            </Slider>
        </div>
    )
}

export default ListVIew;