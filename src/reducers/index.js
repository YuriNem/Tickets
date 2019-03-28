import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { combineReducers } from 'redux';

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
    [actions.filterStops](state, { payload: { nameFilter } }) {
        const {
            [nameFilter]: stateFilter,
            allStops,
            noStops,
            oneStop,
            twoStops,
            threeStops,
        } = state;
        if (nameFilter === 'allStops') {
            return {
                allStops: !allStops,
                noStops: !allStops,
                oneStop: !allStops,
                twoStops: !allStops,
                threeStops: !allStops,
            };
        }
        const lengthActiveFilters = [noStops, oneStop, twoStops, threeStops].filter(stateFilter => stateFilter).length;
        if (lengthActiveFilters === 3 && !stateFilter || lengthActiveFilters === 4 && stateFilter) {
            return {
                ...state,
                [nameFilter]: !stateFilter,
                allStops: !allStops,
            };
        }
        return {
            ...state, 
            [nameFilter]: !stateFilter,
        };
    },
    [actions.filterStopsOnly](state, { payload: { nameFilter } }) {
        return {
            allStops: false,
            noStops: false,
            oneStop: false,
            twoStops: false,
            threeStops: false,
            [nameFilter]: true,
        };
    },
}, {
    allStops: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
});

const mobileSidebar = handleActions({
    [actions.changeSidebarView](state) {
        return !state;
    },
    [actions.offMobileSidebar](state, { payload: { width } }) {
        if (width > 1024) {
            return false;
        }
        return state;
    },
}, false);

export default combineReducers({
    tickets,
    currency,
    stops,
    mobileSidebar,
});
