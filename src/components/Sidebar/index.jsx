import React from 'react';
import classNames from 'classnames';

import FilterContainer from '../../containers/Filter.js';

import './style.scss';

const classSidebar = mobileSidebar => {
    return classNames({
        'sidebar': true,
        'sidebar_mobile-opened': mobileSidebar,
    });
}

const classButton = (currencyButton, sideButton) => currency => {
    return classNames({
        'sidebar__button': true,
        [`sidebar__button_${sideButton}`]: true,
        'sidebar__button_hover': !(currency === currencyButton),
        'sidebar__button_active': currency === currencyButton,
    });
}

const Sidebar = ({
    currency,
    mobileSidebar,
    asyncChangeCurrency,
    asyncChangeSidebarView,
}) => {
    return (
        <div className={classSidebar(mobileSidebar)}>
            <button className="sidebar__mobile-button" onClick={asyncChangeSidebarView}>Фильтры</button>
            <section className="sidebar__currency">
                <h2 className="sidebar__name">Валюта</h2>
                <div className="sidebar__buttons">
                    {[['RUB', 'left'], ['USD', 'middle'], ['EUR', 'right']].map(([currencyButton, sideButton]) => 
                    <button className={classButton(currencyButton, sideButton)(currency)} 
                    onClick={() => asyncChangeCurrency({ currency: currencyButton })}>{currencyButton}</button>)}
                </div>
            </section>
            <section className="sidebar__stops">
                <h2 className="sidebar__name">Количество пересадок</h2>
                <div className="sidebar__filters">
                {['allStops', 'noStops', 'oneStop', 'twoStops', 'threeStops'].map(nameFilter => <FilterContainer nameFilter={nameFilter} />)}
                </div>
            </section>
        </div>
    );
}

export default Sidebar;
