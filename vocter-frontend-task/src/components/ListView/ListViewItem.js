import React from 'react';
import './ListViewItem.scss'

const ListViewItem = (props) => {
    const { title, 
        year, 
        poster, 
        content, 
        commentsCount, 
        rank, 
        expectationsCount, 
        likesCount } = props;

    return (
        <div className='list-view-wrapper'>
            <img src={poster} alt=''></img>
            {title}
            {year}
            {rank}

        </div>
    );
}

export default ListViewItem;
