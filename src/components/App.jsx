import React from 'react';

import './style.scss';

import ControlsBar from './ControlsBar/index.jsx';
import Ticket from './Ticket/index.jsx';

export default class App extends React.Component {
    componentDidMount() {
        this.props.asyncGetTickets();
    }

    onChangeCurrency = (currency) => () => this.props.asyncChangeCurrency({ currency });
    
    onFilterStops = (filterStops) => () => this.props.asyncFilterStops({ filterName: filterStops });

    render() {
        const { tickets, currency, stops: { allStops, noStops, oneStop, twoStops, threeStops } } = this.props;
        return (
            <div className="app">
                <ControlsBar {...{ currency, allStops, noStops, oneStop, twoStops, threeStops, onChangeCurrency: this.onChangeCurrency, onFilterStops: this.onFilterStops }} />
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
