import React from 'react';

import './style.scss';

const Ticket = ({
    carrier,
    price,
    currency,
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
    const currencySymbol = {
        RUB: '₽',
        USD: '$',
        EUR: '€',
    };
    const renderStops = (stops) => {
        if (stops === 0) {
            return '';
        } else if (stops === 1) {
            return '1 пересадка';
        } else {
            return `${stops} пересадки`;
        }
    }
    const renderDate = (date) => {
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
    return (
        <div className="ticket">
            <section className="ticket__action-side">
                <h2 className="ticket__carrier">{carrier}</h2>
                <button className="ticket__buy">Купить за {`${price}${currencySymbol[currency]}`}</button>
            </section>
            <section className="ticket__data-side">
                <div className="ticket__times-and-stops">
                    <span className="ticket__time">{departureTime}</span>
                    <div className="ticket__stops">
                        <div className="ticket__amount-stops">{renderStops(stops)}</div>
                        <hr className="ticket__plane-track" />
                    </div>
                    <span className="ticket__time">{arrivalTime}</span>
                </div>
                <div className="ticket__places-and-dates">
                    <div className="ticket__place-and-date">
                        <div className="ticket__place ticket__place_left">{`${origin}, ${originName}`}</div>
                        <div className="ticket__date ticket__date_left">{renderDate(departureDate)}</div>
                    </div>
                    <div className="ticket__place-and-date">
                        <div className="ticket__place ticket__place_right">{`${destinationName}, ${destination}`}</div>
                        <div className="ticket__date ticket__date_right">{renderDate(arrivalDate)}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ticket;
