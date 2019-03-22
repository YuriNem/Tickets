import React from 'react';

import './style.scss';
const ticketIcon = require('../../../svg/ticketIcon.svg');

const currencySymbol = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
};

const renderStops = stops => {
    if (stops === 0) {
        return '';
    } else if (stops === 1) {
        return '1 пересадка';
    } else {
        return `${stops} пересадки`;
    }
}

const renderDate = date => {
    const monthName = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];
    const dayName = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
    ];
    const [day, month, year] = date.split('.');
    const newDate = new Date([month, day, year].join('.'));
    return `${newDate.getDate()} ${monthName[newDate.getMonth()]} ${newDate.getFullYear()}, ${dayName[newDate.getDay()]}`;
}

const Ticket = ({
    currency,
    carrier,
    price,
    departure_time: departureTime,
    stops, 
    arrival_time: arrivalTime,
    origin,
    origin_name: originName,
    departure_date: departureDate,
    destination,
    destination_name: destinationName,
    arrival_date: arrivalDate,
}) => {
    return (
        <div className="ticket">
            <section className="ticket__action-side">
                <h2 className="ticket__name">{carrier}</h2>
                <button className="ticket__button">Купить за {`${price}${currencySymbol[currency]}`}</button>
            </section>
            <section className="ticket__data-side">
                <div className="ticket__times-and-stops">
                    <span className="ticket__time">{departureTime}</span>
                    <div className="ticket__stops">
                        <div className="ticket__amount-stops">{renderStops(stops)}</div>
                        <hr className="ticket__line"/>
                        <img className="ticket__icon" src={ticketIcon} alt="ticketIcon"/>
                    </div>
                    <span className="ticket__time">{arrivalTime}</span>
                </div>
                <div className="ticket__places-and-dates">
                    <div className="ticket__place-and-date ticket__place-and-date_left">
                        <div className="ticket__place">{`${origin}, ${originName}`}</div>
                        <div className="ticket__date">{renderDate(departureDate)}</div>
                    </div>
                    <div className="ticket__place-and-date ticket__place-and-date_right">
                        <div className="ticket__place">{`${destinationName}, ${destination}`}</div>
                        <div className="ticket__date">{renderDate(arrivalDate)}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ticket;
