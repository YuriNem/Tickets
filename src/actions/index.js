import { createAction } from 'redux-actions';
import axios from 'axios';

import 'babel-polyfill';

export const getTickets = createAction('GET_TICKETS');
export const asyncGetTickets = () => async (dispatch) => {
    const resTickets = await axios.get('/tickets');
    //const resCurrencyToEUR = await axios.get('https://data.fixer.io/api/latest?access_key=');
    const currencyToRUB = {
        RUB: 1,
        USD: 1 / 64,
        EUR: 1 / 73,
    };
    const tickets = resTickets.data.tickets.map(ticket => (
        { ...ticket, price: {
            RUB: ticket.price,
            USD: Math.round(ticket.price * currencyToRUB.USD),
            EUR: Math.round(ticket.price * currencyToRUB.EUR),
        } }
    ));
    dispatch(getTickets({ tickets }));
};

export const changeCurrency = createAction('CHANGE_CURRENCY');
export const asyncChangeCurrency = ({ currency }) => async (dispatch) => dispatch(changeCurrency({ currency }));

export const filterStops = createAction('FILTER_STOPS');
export const asyncFilterStops = ({ nameFilter }) => async (dispatch) => dispatch(filterStops({ nameFilter }));

export const filterStopsOnly = createAction('FILTER_STOPS_ONLY');
export const asyncFilterStopsOnly = ({ nameFilter }) => async (dispatch) => dispatch(filterStopsOnly({ nameFilter }));

export const changeSidebarView = createAction('CHANGE_SIDEBAR_VIEW');
export const asyncChangeSidebarView = () => async (dispatch) => dispatch(changeSidebarView());

export const offMobileSidebar = createAction('OFF_MOBILE_SIDEBAR');
export const asyncOffMobileSidebar = ({ width }) => async (dispatch) => dispatch(offMobileSidebar({ width }));
