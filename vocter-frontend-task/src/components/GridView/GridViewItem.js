import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import MenuHeaderValues from 'common/menuHeaderValues';
import { GridVIewItemConstants } from 'common/constants';
import ProgressBarSettings from 'common/progressBarSettings';
import './GridViewItem.scss'

const GridViewItem = (props) => {
    const { title, year, poster, commentsCount, likesCount, rank, type, expectationsCount } = props;

    const movieType = (type) => {
        if (MenuHeaderValues.MOVIE === type) {
            return GridVIewItemConstants.MOVIE;
        } else if (MenuHeaderValues.TV_SHOW === type) {
            return GridVIewItemConstants.TV_SHOW;
        };
    }

    return (
        <div className='grid-view-item-wrapper'>
            <div className='grid-view-title-wrapper'>
                <span className='title'>
                    {title}
                </span>
                <span className='year'>
                    {year}
                </span>
            </div>

            <div className='grid-view-poster-wrapper'>
                <div className='play-icon-wrapper'>
                    <span className='play-icon-background'>
                        <span className='icon play-icon'></span>
                    </span>
                </div>
                <a className='film-type-icon-wrapper' href='/'>
                    <span className={`icon ${movieType(type)}`}></span>
                </a>
                {expectationsCount && <a className='no-rating-icon-wrapper' href='/'>
                    <span className='icon no-rating-icon'></span>
                </a>}
                {rank && <a className='rating-icon-wrapper' href='/'>
                    <CircularProgressbar {...ProgressBarSettings.GRID_VIEW_SETTINGS} text={rank} value={rank} />;
                </a>}

                <div className='poster-fogging'></div>
                <div className="poster">
                    <img src={poster} alt='' />
                </div>
            </div>
            <div className='grid-view-stats-wrapper'>
                <span className="stats-icon-wrapper">
                    <a href="/" className="share-button">
                        <span className="icon share-icon"></span>
                    </a>
                </span>
                <span className="stats-icon-wrapper">
                    <span className='stats-number'>{commentsCount}</span>
                    <a href="/">
                        <span className="icon comments-icon"></span>
                    </a>
                </span>
                {rank && <span className="stats-icon-wrapper">
                    <span className='stats-number'>{rank}</span>
                    <a href="/">
                        <span className="icon ratings-icon">
                            <CircularProgressbar {...ProgressBarSettings.STATS_BAR_SETTINGS} text={rank} value={rank} />
                        </span>
                    </a>
                </span>}
                {expectationsCount && <span className="stats-icon-wrapper">
                    <span className='stats-number'>{expectationsCount}</span>
                    <a href="/">
                        <span className="icon gradeless-icon"></span>
                    </a>
                </span>}
                <span className="stats-icon-wrapper">
                    <span className='stats-number'>{likesCount}</span>
                    <a href="/">
                        <span className="icon likes-icon"></span>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default GridViewItem;
