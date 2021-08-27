import React from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@material-ui/lab';

export default function Timeline({ children }) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                {children}
            </TimelineContent>
        </TimelineItem>
    );
}