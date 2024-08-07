import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../components/Calendar';
import { Event as EventType } from '../types/event';
import {NBR_HOUR} from "../utils/constant";

describe('Calendar', () => {
    it('should render events correctly', () => {
        const events: EventType[] = [
            { id: 1, start: '10:00', duration: 60 },
            { id: 2, start: '10:30', duration: 60 },
        ];
        render(<Calendar events={events} />);

        // Check if the events are rendered
        expect(screen.getByText('1 ** 60 min **')).toBeInTheDocument();
        expect(screen.getByText('2 ** 60 min **')).toBeInTheDocument();

        // Check if time labels are rendered
        for (let i = 1; i <= NBR_HOUR; i++) {
            expect(screen.getByText(`${i}:00`)).toBeInTheDocument();
        }
    });
});
