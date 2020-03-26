import React from 'react';
import './ListView.css'

class ListView extends React.Component {
    render() {
        const { title, year, director, poster } = this.props;

        return (
            <div className='list-view-wrapper'>
                <div className='list-view-poster' style={{ backgroundImage: "url(" + poster + ")" }}>
                </div>
                {title}
                {year}

            </div>
        );
    }
}

export default ListView;
