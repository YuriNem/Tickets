import React from 'react';
import classNames from 'classnames';

import FilterContainer from '../../containers/Filter.js';

import './style.scss';

const classButton = (currencyButton, sideButton) => (currency) => {
    return classNames({
        'controls-bar__button': true,
        [`controls-bar__button_${sideButton}`]: true,
        'controls-bar__button_hover': !(currency === currencyButton),
        'controls-bar__button_active': currency === currencyButton,
    });
}

const SideBar = ({
    currency,
    onChangeCurrency,
}) => {
    return (
        <div className="controls-bar">
            <section className="controls-bar__currency">
                <h2 className="controls-bar__name">Валюта</h2>
                <div className="controls-bar__buttons">
                    <button className={classButton('RUB', 'left')(currency)} onClick={onChangeCurrency('RUB')}>RUB</button>
                    <button className={classButton('USD', 'middle')(currency)} onClick={onChangeCurrency('USD')}>USD</button>
                    <button className={classButton('EUR', 'right')(currency)} onClick={onChangeCurrency('EUR')}>EUR</button>
                </div>
            </section>
            <section className="controls-bar__stops">
                <h2 className="controls-bar__name">Количество пересадок</h2>
                <div className="controls-bar__filters">
                {['allStops', 'noStops', 'oneStop', 'twoStops', 'threeStops'].map(nameFilter => <FilterContainer nameFilter={nameFilter}/>)}
                </div>
            </section>
        </div>
    );
}

export default SideBar;
