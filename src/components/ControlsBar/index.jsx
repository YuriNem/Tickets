import React from 'react';

import './style.scss';

const ControlsBar = ({
    allStops,
    noStops,
    oneStop,
    twoStops,
    threeStops,
    onChangeCurrency,
    onFilterStops,
}) => {
    return (
        <div className="controls-bar">
            <section className="controls-bar__currency">
                <h2 className="controls-bar__name">Валюта</h2>
                <div className="controls-bar__buttons">
                    <button className="controls-bar__button" onClick={onChangeCurrency('RUB')}>RUB</button>
                    <button className="controls-bar__button" onClick={onChangeCurrency('USD')}>USD</button>
                    <button className="controls-bar__button" onClick={onChangeCurrency('EUR')}>EUR</button>
                </div>
            </section>
            <section className="controls-bar__stops">
                <h2 className="controls-bar__name">Колличество пересадок</h2>
                <div className="controls-bar__filter">
                    <input type="checkbox" className="controls-bar__checkbox" value={allStops} onChange={onFilterStops('allStops')} />
                    <span className="controls-bar__filter-name">Все</span>
                </div>
                <div className="controls-bar__filter">
                    <input type="checkbox" className="controls-bar__checkbox" value={noStops} onChange={onFilterStops('noStops')} />
                    <span className="controls-bar__filter-name">Без пересадок</span>
                </div>
                <div className="controls-bar__filter">
                    <input type="checkbox" className="controls-bar__checkbox" value={oneStop} onChange={onFilterStops('oneStop')} />
                    <span className="controls-bar__filter-name">1 пересадка</span>
                </div>
                <div className="controls-bar__filter">
                    <input type="checkbox" className="controls-bar__checkbox" value={twoStops} onChange={onFilterStops('twoStops')} />
                    <span className="controls-bar__filter-name">2 пересадки</span>
                </div>
                <div className="controls-bar__filter">
                    <input type="checkbox" className="controls-bar__checkbox" value={threeStops} onChange={onFilterStops('threeStops')} />
                    <span className="controls-bar__filter-name">3 пересадки</span>
                </div>
            </section>
        </div>
    );
}

export default ControlsBar;
