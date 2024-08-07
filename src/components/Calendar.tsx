import React, { useState, useEffect, useRef } from 'react';
import { detectOverlaps, calculateEventDimensions } from '../utils/overlapUtils';
import Event from './Event';
import TimeLabels from './TimeLabels';
import { Event as EventType } from '../types/event';
import '../styles/calendar.css';
import { NBR_HOUR } from '../utils/constant';

interface CalendarProps {
    events: EventType[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
    // State variables for container dimensions
    const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.6);
    const [containerHeight, setContainerHeight] = useState(window.innerHeight * 0.7);
    const calendarRef = useRef<HTMLDivElement>(null); // Reference to the calendar container

    // Effect to handle window resize events
    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth * 0.6);
            setContainerHeight(window.innerHeight * 0.7);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to scroll to the first event's start time when the component mounts
    useEffect(() => {
        if (calendarRef.current) {
            const [hours] = positionedEvents[0].start.split(':').map(Number); // Get the start time hours of the first event
            const scrollToY = (containerHeight / NBR_HOUR) * hours; // Calculate the scroll position
            calendarRef.current.scrollTo(0, scrollToY); // Scroll to the calculated position
        }
    }, [containerHeight]);

    // Detect overlapping events and calculate their dimensions
    const groups = detectOverlaps(events);
    const positionedEvents = calculateEventDimensions(groups, containerWidth);

    return (
        <div className="container" style={{ height: containerHeight }} ref={calendarRef}>
            <TimeLabels /> {/* Render time labels */}
            <div className="calendar" style={{ width: containerWidth, height: window.innerHeight }}>
                {/* Render hour lines */}
                {Array.from({ length: NBR_HOUR }).map((_, index) => (
                    <div
                        key={index}
                        className="hour-line"
                        style={{ top: `${(index + 1) * (100 / NBR_HOUR)}%` }}
                    />
                ))}
                {/* Render events */}
                {positionedEvents.map(event => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Calendar;
