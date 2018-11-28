import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { combineReducers } from 'redux';
import { fail } from 'assert';

const tickets = handleActions({
    [actions.getTickets](state, { payload: { tickets } }) {
        return tickets;
    },
}, []);

const currency = handleActions({
    [actions.changeCurrency](state, { payload: { currency } }) {
        return currency;
    },
}, 'RUB');

const stops = handleActions({
    [actions.filterStops](state, { payload: { filterName } }) {
        const {
            [filterName]: stateFilter,
            allStops,
            noStops,
            oneStop,
            twoStops,
            threeStops,
        } = state;
        if (filterName === 'allStops') {
            return { 
                allStops: !allStops,
                noStops: !allStops,
                oneStop: !allStops,
                twoStops: !allStops,
                threeStops: !allStops,
            };
        }
        const l = [
            noStops, 
            oneStop, 
            twoStops, 
            threeStops,
        ].filter(filter => filter).length;
        if (l === 3 && !stateFilter || l === 4 && stateFilter) {
            return { 
                ...state,
                [filterName]: !stateFilter,
                allStops: !allStops,
            };
        }
        return { 
            ...state, 
            [filterName]: !stateFilter,
        };
    },
    [actions.filterStopsOnly](state, { payload: { filterName } }) {
        return { 
            allStops: false,
            noStops: false,
            oneStop: false,
            twoStops: false,
            threeStops: false,
            [filterName]: true,
        };
    },
}, {
    allStops: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
});

export default combineReducers({
    tickets,
    currency,
    stops,
});
