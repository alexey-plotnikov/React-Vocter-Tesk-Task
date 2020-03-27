import React from 'react';

import {MenuHeaderConstants} from 'common/constants'
import MenuHeaderValues from 'common/menuHeaderValues';
import './Menu.css'

const Menu = (props) => {

    const { title, sortByType, loadView } = props

    return (
        <div className='menu-wrapper'>

            <div className='title'>
                {title}
            </div>

            <button className='btn' onClick={() => sortByType(MenuHeaderValues.ALL)}>
                {MenuHeaderConstants.ALL}
            </button>

            <button className='btn' onClick={() => sortByType(MenuHeaderValues.MOVIE)}>
                {MenuHeaderConstants.MOVIES}
            </button>

            <button className='btn' onClick={() => sortByType(MenuHeaderValues.TV_SHOW)}>
                {MenuHeaderConstants.TV_SHOWS}
            </button>

            <button className='btn' onClick={() => loadView(MenuHeaderValues.GRID)}>
                GRID
                </button>

            <button className='btn' onClick={() => loadView(MenuHeaderValues.LIST)}>
                LIST
                </button>
        </div>
    )
}

export default Menu;