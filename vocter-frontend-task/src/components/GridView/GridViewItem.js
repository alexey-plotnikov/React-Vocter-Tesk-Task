import React from 'react';
import './GridViewItem.scss'

const GridViewItem = (props) => {
    const { title, year, poster, commentsCount, likesCount, rank, expectationsCount } = props;

    return (
        <div className='grid-view-item-wrapper'>
            <span className='grid-view-item-title'>
                {title}
            </span>
            <span className='grid-view-item-year'>
                {year}
            </span>
            <span className='grid-view-item-navbar'>
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
            </span>

            <img src={poster} alt=''></img>

        </div>
    );
}

export default GridViewItem;
