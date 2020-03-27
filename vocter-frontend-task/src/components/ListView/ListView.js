import React from 'react';
import './ListView.css'

const ListView = (props) => {
    const { title, year, director, poster } = props;

    return (
        <div className='list-view-wrapper'>
            <div className='list-view-poster' style={{ backgroundImage: "url(" + poster + ")" }}>
            </div>
            {title}
            {year}

        </div>
    );
}

export default ListView;
