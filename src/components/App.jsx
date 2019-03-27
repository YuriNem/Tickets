import React from 'react';
import { uniqueId } from 'lodash';

import './style.scss';
const logo = require('../../svg/logo.svg');

import SidebarContainer from '../containers/Sidebar.js';
import TicketContainer from '../containers/Ticket.js';

export default class App extends React.Component {

    componentDidMount() {
        const { asyncGetTickets } = this.props;
        asyncGetTickets();
    }

    render() {
        const { 
            tickets, 
            currency, 
            stops: { allStops, noStops, oneStop, twoStops, threeStops }, 
            mobileSidebar, 
            asyncChangeSidebarView 
        } = this.props;

        return (
            <div className="app" >
                <img className="app__logo" src={logo} alt="logo" />
                <div className="app__main">
                    <SidebarContainer />
                    <div className="app__tickets">
                        {tickets && !mobileSidebar ? 
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
                        .map(ticket => <TicketContainer {...ticket} key={uniqueId()} />)
                        : null}
                    </div>
                </div>
                {!mobileSidebar ?
                <button className="app__button" onClick={asyncChangeSidebarView}>Фильтровать</button>
                : null}
            </div>
        );
    }
}
