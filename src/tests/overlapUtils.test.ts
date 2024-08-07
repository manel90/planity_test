import { detectOverlaps, calculateEventDimensions } from '../utils/overlapUtils';
import { Event as TypeEvent } from '../types/event';

describe('detectOverlaps', () => {
    it('should group overlapping events together', () => {
        const events: TypeEvent[] = [
            { id: 1, start: '10:00', duration: 60 },
            { id: 2, start: '10:30', duration: 60 },
            { id: 3, start: '11:30', duration: 60 },
        ];
        const groups = detectOverlaps(events);
        expect(groups.length).toBe(2);
        expect(groups[0].length).toBe(2); // First two events overlap
        expect(groups[1].length).toBe(1); // Third event does not overlap with first two
    });
});

describe('calculateEventDimensions', () => {
    it('should calculate dimensions correctly for events in the same group', () => {
        const groups: TypeEvent[][] = [
            [
                { id: 1, start: '10:00', duration: 60, startMinutes: 600, endMinutes: 660 },
                { id: 2, start: '10:30', duration: 60, startMinutes: 630, endMinutes: 690 },
            ],
        ];
        const containerWidth = 800;
        const positionedEvents = calculateEventDimensions(groups, containerWidth);
        expect(positionedEvents.length).toBe(2);
        expect(positionedEvents[0].width).toBe(containerWidth / 2);
        expect(positionedEvents[1].width).toBe(containerWidth / 2);
        expect(positionedEvents[1].left).toBe(containerWidth / 2);
    });
});
