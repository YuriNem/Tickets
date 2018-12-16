import React from 'react';

import './style.scss';

import SidebarContainer from '../containers/Sidebar.js';
import TicketContainer from '../containers/Ticket.js';

export default class App extends React.Component {

    componentDidMount() {
        const { asyncGetTickets } = this.props;
        asyncGetTickets();
    }

    render() {
        const { tickets, currency, stops: { allStops, noStops, oneStop, twoStops, threeStops } } = this.props;
        return (
            <div className="app">
                <SidebarContainer/>
                <div className="app__tickets">
                {tickets ? 
                tickets
                .map(ticket => ({ ...ticket, price: ticket.price[currency] }))
                .filter(ticket => {
                    return [allStops, noStops, oneStop, twoStops, threeStops]
                    .map((state, index) => ({ state, index: index - 1 }))
                    .filter(filter => filter.state)
                    .map(filter => (filter.index === -1 || filter.index === ticket.stops))
                    .filter(state => state)
                    .length;
                })
                .map(ticket => <TicketContainer {...ticket} />)
                : null}
                </div>
            </div>
        );
    }
}
