import React from 'react';
import classNames from 'classnames';

import './style.scss';

const classButton = (currencyButton, sideButton) => (currency) => {
    return classNames({
        'controls-bar__button': true,
        [`controls-bar__button_${sideButton}`]: true,
        'controls-bar__button_hover': !(currency === currencyButton),
        'controls-bar__button_active': currency === currencyButton,
    });
}

const ControlsBar = ({
    currency,
    onChangeCurrency,
    allStops,
    noStops,
    oneStop,
    twoStops,
    threeStops,
    onFilterStops,
    onFilterStopsOnly,
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
                    <label className="controls-bar__filter controls-bar__filter_all">
                        <input type="checkbox" className="controls-bar__filter-checkbox" checked={allStops} onChange={onFilterStops('allStops')}/>
                        <div className="controls-bar__filter-checkbox-custom"></div>
                        <span className="controls-bar__filter-name">Все</span>
                    </label>
                    <label className="controls-bar__filter">
                        <input type="checkbox" className="controls-bar__filter-checkbox" checked={noStops} onChange={onFilterStops('noStops')}/>
                        <div className="controls-bar__filter-checkbox-custom"></div>
                        <span className="controls-bar__filter-name">Без пересадок</span>
                        <button className="controls-bar__filter-button" onClick={onFilterStopsOnly('noStops')}>Только</button>
                    </label>
                    <label className="controls-bar__filter">
                        <input type="checkbox" className="controls-bar__filter-checkbox" checked={oneStop} onChange={onFilterStops('oneStop')}/>
                        <div className="controls-bar__filter-checkbox-custom"></div>
                        <span className="controls-bar__filter-name">1 пересадка</span>
                        <button className="controls-bar__filter-button" onClick={onFilterStopsOnly('oneStop')}>Только</button>
                    </label>
                    <label className="controls-bar__filter">
                        <input type="checkbox" className="controls-bar__filter-checkbox" checked={twoStops} onChange={onFilterStops('twoStops')}/>
                        <div className="controls-bar__filter-checkbox-custom"></div>
                        <span className="controls-bar__filter-name">2 пересадки</span>
                        <button className="controls-bar__filter-button" onClick={onFilterStopsOnly('twoStops')}>Только</button>
                    </label>
                    <label className="controls-bar__filter">
                        <input type="checkbox" className="controls-bar__filter-checkbox" checked={threeStops} onChange={onFilterStops('threeStops')}/>
                        <div className="controls-bar__filter-checkbox-custom"></div>
                        <span className="controls-bar__filter-name">3 пересадки</span>
                        <button className="controls-bar__filter-button" onClick={onFilterStopsOnly('threeStops')}>Только</button>
                    </label>
                </div>
            </section>
        </div>
    );
}

export default ControlsBar;
