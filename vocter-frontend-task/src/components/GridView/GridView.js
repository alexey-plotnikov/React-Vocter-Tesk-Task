import React from 'react';
import './GridView.css'

const GridView = (props) => {
    const { title, year, director, poster } = props;

    return (
        <div className='grid-view-wrapper'>
            {title}
            {year}
            {/* <div className='grid-view-poster' style={{ backgroundImage: "url("+ poster +")" }}>
                </div> */}
            <img className='test' src={poster} alt=''></img>
        </div>
    );
}

export default GridView;
