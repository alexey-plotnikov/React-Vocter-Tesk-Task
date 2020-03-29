import React from 'react';

import { MenuHeaderConstants } from 'common/constants'
import MenuHeaderValues from 'common/menuHeaderValues';
import './Menu.css'

const Menu = (props) => {

    const { title, sortByType, loadView, activeBtn } = props

    const activeButton = (type)  => {
        if (type === activeBtn) {
            return MenuHeaderValues.ACTIVE_BUTTON;
        } 
    }

    return (
        <div className='menu-wrapper'>

            <div className='menu-title'>
                {title}
            </div>

            <button className={`btn ${activeButton(MenuHeaderConstants.ALL)}`} onClick={() => sortByType(MenuHeaderValues.ALL, MenuHeaderConstants.ALL)}>
                {MenuHeaderConstants.ALL}
            </button>

            <button className={`btn ${activeButton(MenuHeaderConstants.MOVIES)}`} onClick={() => sortByType(MenuHeaderValues.MOVIE, MenuHeaderConstants.MOVIES)}>
                {MenuHeaderConstants.MOVIES}
            </button>

            <button className={`btn ${activeButton(MenuHeaderConstants.TV_SHOWS)}`} onClick={() => sortByType(MenuHeaderValues.TV_SHOW, MenuHeaderConstants.TV_SHOWS)}>
                {MenuHeaderConstants.TV_SHOWS}
            </button>

            <button className='card-view-btn' onClick={() => loadView(MenuHeaderValues.GRID)}>
            </button>

            <button className='list-view-btn' onClick={() => loadView(MenuHeaderValues.LIST)}>
            </button>
        </div>
    )
}

export default Menu;