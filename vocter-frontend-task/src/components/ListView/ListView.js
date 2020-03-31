import React from 'react';
import Slider from "react-slick";

import ListViewItem from 'components/ListView/ListViewItem';
import SliderSettings from 'common/sliderSettings';
import './ListView.scss'

class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    
    previous() {
        this.slider.slickPrev();
    }

    render() {

        const { films } = this.props;

        if (films.length > 2) {
            return (
                <div className='list-view-wrapper'>
                    <div className='previous-slider-button-wrapper'>
                        <span className='previous-slider-button' onClick={this.previous}></span>
                    </div>
                    <Slider ref={c => (this.slider = c)} {...SliderSettings.VERTICAL}>
                        {
                            films.map(({ id, title, year, director,
                                writer, poster, genres, type,
                                rank, likes_count, comments_count,
                                link, expectations_count, content }) => (
                                    <ListViewItem
                                        key={id}
                                        title={title}
                                        year={year}
                                        director={director}
                                        writer={writer}
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
                    <div className='next-slider-button-wrapper'>
                        <span className='next-slider-button' onClick={this.next}></span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='list-view-wrapper'>
                    {
                        films.map(({ id, title, year, director,
                            writer, poster,
                            rank, likes_count, comments_count,
                            expectations_count, content }) => (
                                <ListViewItem
                                    key={id}
                                    title={title}
                                    year={year}
                                    director={director}
                                    writer={writer}
                                    poster={poster}
                                    content={content}
                                    commentsCount={comments_count}
                                    rank={rank}
                                    expectationsCount={expectations_count}
                                    likesCount={likes_count}
                                />
                            ))
                    }
                </div>
            )
        }
    }
}

export default ListView;