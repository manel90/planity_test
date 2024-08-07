// src/components/TimeLabels.tsx
import React from 'react';
import '../styles/timeLabels.css';
import {NBR_HOUR} from "../utils/constant";

const TimeLabels: React.FC = () => {
    const hours = Array.from({ length: NBR_HOUR }, (_, i) => 0 + i);

    return (
        <div className="time-labels"  style={{  height: window.innerHeight}}>
            {hours.map((hour) => (
                <div key={hour} className="time-label">
                    {hour}H:00
                </div>
            ))}
        </div>
    );
};

export default TimeLabels;
