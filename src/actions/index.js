import { createAction } from 'redux-actions';
import axios from 'axios';

import "babel-core/register";
import "babel-polyfill";

export const getTickets = createAction('GET_TICKETS');
export const asyncGetTickets = () => async (dispatch) => {
    const resTickets = await axios.get('/tickets');
    const resCurrencyToEUR = await axios.get('http://data.fixer.io/api/latest?access_key=f27fa21a92adb73e190d7fd704cad72a');
    const currencyToRUB = {
        RUB: resCurrencyToEUR.data.rates.RUB / resCurrencyToEUR.data.rates.RUB,
        USD: resCurrencyToEUR.data.rates.USD / resCurrencyToEUR.data.rates.RUB,
        EUR: resCurrencyToEUR.data.rates.EUR / resCurrencyToEUR.data.rates.RUB,
    };
    const tickets = resTickets.data.tickets.map(ticket => {
        return { ...ticket, price: {
            RUB: ticket.price,
            USD: Math.ceil(ticket.price * currencyToRUB.USD),
            EUR: Math.ceil(ticket.price * currencyToRUB.EUR),
        } };
    });
    dispatch(getTickets({ tickets }));
}

export const changeCurrency = createAction('CHANGE_CURRENCY');
export const asyncChangeCurrency = ({ currency }) => async (dispatch) => dispatch(changeCurrency({ currency }));

export const filterStops = createAction('FILTER_STOPS');
export const asyncFilterStops = ({ nameFilter }) => async (dispatch) => dispatch(filterStops({ nameFilter }));

export const filterStopsOnly = createAction('FILTER_STOPS_ONLY');
export const asyncFilterStopsOnly = ({ nameFilter }) => async (dispatch) => dispatch(filterStopsOnly({ nameFilter }));
