import React from 'react';

import './Menu.css'

class Menu extends React.Component {

    render() {
        const { title, loadView } = this.props

        return (
            <div className='menu-wrapper'>

                <div className='title'>
                    {title}
                </div>

                <button className='btn'>
                    All
                </button>

                <button className='btn'>
                    Movies
                </button>

                <button className='btn'>
                    TV Shows
                </button>

                <button className='btn' onClick={() => loadView('GRID')}>
                    GRID
                </button>

                <button className='btn' onClick={() => loadView('LIST')}>
                    LIST
                </button>
            </div>
        )
    }
}

export default Menu;