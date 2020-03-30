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
    const percentage = 66;

    const settings = {


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

            <div className='poster-wrapper'>
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
            <div className='stats-wrapper'>
                <span className="stats-icon-wrapper">
                    <a href="/" className="share-button">
                        <span className="icon share-icon"></span>
                    </a>
                </span>
                <span className="stats-icon-wrapper">
                    <a href="/">
                        <span className='stats-number'>{commentsCount}</span>
                        <span className="icon comments-icon"></span>
                    </a>
                </span>
                {rank && <span className="stats-icon-wrapper">
                    <a href="/">
                        <span className='stats-number'>{rank}</span>
                        <span className="icon ratings-icon">
                            <CircularProgressbar {...ProgressBarSettings.STATS_BAR_SETTINGS} text={rank} value={rank} />
                        </span>
                    </a>
                </span>}
                {expectationsCount && <span className="stats-icon-wrapper">
                    <a href="/">
                        <span className='stats-number'>{expectationsCount}</span>
                        <span className="icon gradeless-icon"></span>
                    </a>
                </span>}
                <span className="stats-icon-wrapper">
                    <a href="/">
                        <span className='stats-number'>{likesCount}</span>
                        <span className="icon likes-icon"></span>
                    </a>
                </span>
            </div>



            {/* <span className='grid-view-item-navbar'>
                <div className='grid-view-item-comments'>
                    {commentsCount}
                </div>
                <div>
                    {likesCount}
                </div>
                {rank && <div>
                    {rank}
                </div>}

                {expectationsCount && <div>
                    {expectationsCount}
                </div>}
            </span> */}



        </div>
    );
}

export default GridViewItem;
