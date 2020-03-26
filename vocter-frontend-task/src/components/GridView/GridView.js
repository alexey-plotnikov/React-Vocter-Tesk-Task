import React from 'react';
import './GridView.css'

class GridView extends React.Component {
    render() {
        const { title, year, director, poster } = this.props;

        return (
            <div className='grid-view-wrapper'>
                {title}
                {year}
                <div className='grid-view-poster' style={{ backgroundImage: "url("+ poster +")" }}>
                </div>
            </div>
        );
    }
}

export default GridView;
