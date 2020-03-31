import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import ProgressBarSettings from 'common/progressBarSettings';
import { ListViewItemConstants } from 'common/constants';
import './ListViewItem.scss'

const ListViewItem = (props) => {
    const { title,
        year,
        poster,
        director,
        writer,
        content,
        commentsCount,
        rank,
        expectationsCount,
        likesCount } = props;

    return (
        <div className='list-view-item-wrapper'>
            <div className='list-view-poster-wrapper'>
                <div className='poster-fogging'></div>
                <div className='play-icon-wrapper'>
                    <span className='play-icon-background'>
                        <span className='icon play-icon'></span>
                    </span>
                </div>
                <div className='poster'>
                    <img src={poster} alt=''></img>
                </div>
            </div>
            <div className='list-view-rating-wrapper'>
                {rank && <a className='rating-icon-wrapper' href='/'>
                    <CircularProgressbar {...ProgressBarSettings.LIST_VIEW_SETTINGS} text={rank} value={rank} />
                </a>}
                {expectationsCount && <a className='no-rating-icon-wrapper' href='/'>
                    <span className='icon no-rating-icon'></span>
                </a>}
            </div>
            <div className='list-view-film-information-wrapper'>
                <span className='title'>
                    {title}
                </span>
                <div className='infromation-wrapper'>
                    <span className='year'>{year}</span>
                    <span className='vertical-line'>
                        {ListViewItemConstants.VERTICAL_LINE}
                    </span>
                    <span className='director'>
                        {ListViewItemConstants.DIRECTOR} {director}
                    </span>
                    <span className='vertical-line'>
                        {ListViewItemConstants.VERTICAL_LINE}
                    </span>
                    <span className='writer'>
                        {ListViewItemConstants.WRITER}
                        {writer}
                    </span>
                </div>
                <div className='film-content'>
                    {content}
                </div>
                <div className='stats-wrapper'>
                    <span className='share-icon-wrapper'>
                        <a className='' href='/'>
                            <span className='icon share-icon'></span>
                        </a>
                    </span>
                    <span className='stats-icon-wrapper'>
                        <span className='stats-number'>
                            {commentsCount}
                        </span>
                        <span className='vertical-line'>
                            {ListViewItemConstants.VERTICAL_LINE}
                        </span>
                        <a className='' href='/'>
                            <span className="icon comments-icon"></span>
                        </a>
                    </span>
                    {rank && <span className="stats-icon-wrapper">
                        <span className='stats-number'>
                            {rank}
                        </span>
                        <span className='vertical-line'>
                            {ListViewItemConstants.VERTICAL_LINE}
                        </span>
                        <a href="/">
                            <span className="icon ratings-icon">
                                <CircularProgressbar {...ProgressBarSettings.STATS_BAR_SETTINGS} text={rank} value={rank} />
                            </span>
                        </a>
                    </span>}
                    {expectationsCount && <span className="stats-icon-wrapper">
                        <span className='stats-number'>
                            {expectationsCount}
                        </span>
                        <span className='vertical-line'>
                            {ListViewItemConstants.VERTICAL_LINE}
                        </span>
                        <a href="/">
                            <span className="icon gradeless-icon"></span>
                        </a>
                    </span>}
                    <span className='stats-icon-wrapper'>
                        <span className='stats-number'>
                            {likesCount}
                        </span>
                        <span className='vertical-line'>
                            {ListViewItemConstants.VERTICAL_LINE}
                        </span>
                        <a className='' href='/'>
                            <span className='icon likes-icon'></span>
                        </a>
                    </span>
                    <span className='read-more-wrapper'>
                        <a className='read-more' href='/'>
                            {ListViewItemConstants.READ_MORE}
                        </a>

                    </span>
                </div>
            </div>
        </div>
    );
}

export default ListViewItem;
