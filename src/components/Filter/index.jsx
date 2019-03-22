import React from 'react';

import './style.scss';

const namesFilterString = {
    allStops: 'Все',
    noStops: 'Без пересадок',
    oneStop: '1 пересадка',
    twoStops: '2 пересадки',
    threeStops: '3 пересадки',
};

const Filter = ({
    stops,
    asyncFilterStops,
    asyncFilterStopsOnly,
    nameFilter,
}) => {
    return (
        <label className="filter">
            <input className="filter__checkbox" type="checkbox" checked={stops[nameFilter]} onChange={() => asyncFilterStops({ nameFilter })} />
            <div className="filter__checkbox-custom"></div>
            <div className="filter__name">{namesFilterString[nameFilter]}</div>
            {!(nameFilter === 'allStops') ? 
            <button className="filter__button">
                <div className="filter__button-text" onClick={() => asyncFilterStopsOnly({ nameFilter })}>Только</div>
            </button> 
            : null}
        </label>
    );
}

export default Filter;
