import React from 'react';
import { Event as EventType } from '../types/event';
import '../styles/event.css';
import { NBR_HOUR } from '../utils/constant';

interface EventProps {
    event: EventType;
}

const Event: React.FC<EventProps> = ({ event }:any) => {
    // Calculate the top position of the event as a percentage of the total height
    const top = (event.startMinutes / (NBR_HOUR * 60)) * 100;
    // Calculate the height of the event as a percentage of the total height
    const height = (event.duration / (NBR_HOUR * 60)) * 100;

    return (
        <div
            className="event"
            style={{
                top: `${top}%`,
                height: `${height}%`,
                width: event.width,
                left: event.left,
            }}
        >
            {event.id} ** {event.duration} min **
        </div>
    );
};

export default Event;
