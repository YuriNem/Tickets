import React from 'react';
import classNames from 'classnames';

import './style.scss';

const classFilter = (isAll) => {
    return classNames({
        'filter': true,
        'filter_all': isAll,
    });
}

const namesStopsOnRU = {
    allStops: 'Все',
    noStops: 'Без пересадок',
    oneStop: '1 пересадка',
    twoStops: '2 пересадки',
    threeStops: '3 пересадки',
};

const Filter = ({
    isAll,
    stateStops,
    onFilterStops,
    nameStops,
    onFilterStopsOnly,
}) => {
    return (
        <label className={classFilter(isAll)}>
            <input className="filter__checkbox" type="checkbox" checked={stateStops} onChange={onFilterStops(nameStops)}/>
            <div className="filter__checkbox-custom"></div>
            <span className="filter__name">{namesStopsOnRU[nameStops]}</span>
            {!all ? <button className="filter__button" onClick={onFilterStopsOnly(nameStops)}>Только</button> : null}
        </label>
    );
}

export default Filter;
