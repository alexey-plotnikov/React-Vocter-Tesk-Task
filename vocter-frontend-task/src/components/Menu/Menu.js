import React from 'react';

import { MenuHeaderConstants } from 'common/constants'
import MenuHeaderValues from 'common/menuHeaderValues';
import './Menu.scss'

const Menu = (props) => {

    const { title, sortByType, loadView, view, activeBtn } = props

    const activeButton = (type) => {
        if (type === activeBtn) {
            return MenuHeaderConstants.ACTIVE_BUTTON;
        }
        if (type === view) {
            return MenuHeaderConstants.ACTIVE_VIEW_BUTTON;
        }
    }

    return (
        <div className='menu-wrapper'>
            <div className='menu-title-wrapper'>
                <span className='title'>{title}</span>
            </div>
            <div className='btn-all-wrapper'>
                <button className={`menu-btn ${activeButton(MenuHeaderConstants.ALL)}`}
                    onClick={() => sortByType(MenuHeaderValues.ALL, MenuHeaderConstants.ALL)}>
                    {MenuHeaderConstants.ALL}
                </button>
            </div>
            <div className='btn-movies-wrapper'>
                <button className={`menu-btn ${activeButton(MenuHeaderConstants.MOVIES)}`}
                    onClick={() => sortByType(MenuHeaderValues.MOVIE, MenuHeaderConstants.MOVIES)}>
                    {MenuHeaderConstants.MOVIES}
                </button>
            </div>
            <div className='btn-tvshows-wrapper'>
                <button className={`menu-btn ${activeButton(MenuHeaderConstants.TV_SHOWS)}`}
                    onClick={() => sortByType(MenuHeaderValues.TV_SHOW, MenuHeaderConstants.TV_SHOWS)}>
                    {MenuHeaderConstants.TV_SHOWS}
                </button>
            </div>
            <div className='btn-grid-view-wrapper'>
                <button className={`btn-view btn-card-view ${activeButton(MenuHeaderValues.GRID)}`}
                    onClick={() => loadView(MenuHeaderValues.GRID)}>
                </button>
            </div>
            <div className='btn-list-view-wrapper'>
                <button className={`btn-view btn-list-view ${activeButton(MenuHeaderValues.LIST)}`}
                    onClick={() => loadView(MenuHeaderValues.LIST)}>
                </button>
            </div>
        </div>
    )
}

export default Menu;