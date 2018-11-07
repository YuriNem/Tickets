import React from 'react';
import axios from 'axios';

import 'babel-core/register';
import 'babel-polyfill';

import ControlsBar from './ControlsBar/index.jsx';
import Ticket from './Ticket/index.jsx';

import './style.scss';

export default class App extends React.Component {
    state = {
        tickets: [],
        currency: 'RUB',
        allStops: false,
        noStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
    }

    async componentDidMount() {
        const resTickets = await axios.get('/tickets');
        const resCurrency = await axios.get('http://data.fixer.io/api/latest?access_key=f27fa21a92adb73e190d7fd704cad72a');
        const currencyRUB = {
            RUB: resCurrency.data.rates.RUB / resCurrency.data.rates.RUB,
            USD: resCurrency.data.rates.USD / resCurrency.data.rates.RUB,
            EUR: resCurrency.data.rates.EUR / resCurrency.data.rates.RUB,
        };
        const tickets = resTickets.data.tickets.map(ticket => {
            return { ...ticket, price: {
                RUB: ticket.price,
                USD: Math.ceil(ticket.price * currencyRUB.USD),
                EUR: Math.ceil(ticket.price * currencyRUB.EUR),
            } };
        });
        this.setState({ tickets });
    }

    onChangeCurrency = (currency) => () => {
        this.setState({ currency });
    }

    onFilterStops = (filterStops) => () => {
        const { [filterStops]: stateFilterStops } = this.state;
        this.setState({ [filterStops]: !stateFilterStops });
    }

    render() {
        const { tickets, currency, allStops, noStops, oneStop, twoStops, threeStops } = this.state;
        return (
            <div className="app">
                <ControlsBar {...{ allStops, noStops, oneStop, twoStops, threeStops, onChangeCurrency: this.onChangeCurrency, onFilterStops: this.onFilterStops }} />
                <div className="app__tickets">
                {
                    tickets
                    ? tickets
                        .map(ticket => {
                            return { ...ticket, price: ticket.price[currency] };
                        })
                        .filter(ticket => [allStops, noStops, oneStop, twoStops, threeStops]
                            .map((state, index) => {
                                return { state, amount: index - 1 };
                            })
                            .filter(stop => stop.state)
                            .map(stop => (stop.amount === -1 || stop.amount === ticket.stops))
                            .filter(state => state)
                            .length
                        )
                        .map(ticket => <Ticket {...ticket} {...{ currency }} />)
                    : null
                }
                </div>
            </div>
        );
    }
}
