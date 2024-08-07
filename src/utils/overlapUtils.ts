import { Event as TypeEvent } from '../types/event';

// Function to detect overlapping events and group them
export function detectOverlaps(events: TypeEvent[]): TypeEvent[][] {
    // Convert start time to minutes and calculate end time for each event
    events.forEach(event => {
        event.startMinutes = parseTime(event.start);
        event.endMinutes = event.startMinutes + event.duration;
    });

    // Sort events by start time
    events.sort((a: any, b: any) => a.startMinutes - b.startMinutes);

    const groups: TypeEvent[][] = [];
    let currentGroup: TypeEvent[] = [events[0]];
    // Group events based on overlap
    for (let i = 1 ; i < events.length; i++) {
        const event: any = events[i];
        const lastEventInGroup: any = currentGroup[currentGroup.length - 1];
        const [hours] = event.start.split(':').map(Number);
        const [lasthours] = lastEventInGroup.start.split(':').map(Number);

    if (hours === lasthours ) {
            // If the event overlaps with the last event in the current group, add it to the group
            currentGroup.push(event);
        } else {
            // If not, push the current group to groups and start a new group
            groups.push(currentGroup);
            currentGroup = [event];
        }
    }
    // Push the last group to groups
    groups.push(currentGroup);

    return groups;
}

// Function to calculate the dimensions and positions of events within their groups
export function calculateEventDimensions(groups: TypeEvent[][], containerWidth: number) {
    return groups.flatMap(group => {
        const groupWidth = containerWidth / group.length;

        return group.map((event, index) => ({
            ...event,
            width: groupWidth,
            left: groupWidth * index,
        }));
    });
}

// Helper function to parse time strings  into minutes since the start of the day
function parseTime(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}
